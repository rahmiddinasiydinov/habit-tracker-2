import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

type Props = {}

export default function ErrorPage({ }: Props) {
  return (
    <section className="text-center mt-4 md:mt-10">
      <h1 className='bg-dashboard-secondary text-xl  md:text-3xl'>You are lost 😟</h1>
      <Button className="mt-10">
        <Link to='/'>Run home quickly!</Link>
      </Button>
    </section>
  )
} 
