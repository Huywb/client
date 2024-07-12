import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createOrUpdateUser, deleteUser } from '@/libs/actions/user'

export async function POST(req: Request) {

  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;
  
  if(eventType === 'user.created' || eventType === 'user.updated'){
    const {id,first_name,last_name,image_url,email_addresses,username} = evt?.data
    try {
        await createOrUpdateUser(id,first_name,last_name,image_url,email_addresses,username)
        return new Response("User is created or updated",{status:200})
    } catch (error) {
        console.log('Create or updating wrong',error)
        return new Response("Error occrured",{status:500})
    }
  }

  if(eventType === 'user.deleted'){
    try {
        const {id} = evt?.data
        await deleteUser(id? id: '')
        return new Response("User is deleted",{status:200})
    } catch (error) {
        console.log("Cannot delete",error)
        return new Response("Something wrong",{status:500})
    }
  }
}