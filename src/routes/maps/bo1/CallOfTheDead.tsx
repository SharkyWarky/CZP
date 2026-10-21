import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/maps/bo1/CallOfTheDead')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/maps/bo1/CallOfTheDead"!</div>
}
