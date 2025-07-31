import { Button } from "@/components/ui/button"
import PageHeading from "@/shared/components/page-heading"
import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <section className="text-center mt-4 md:mt-10">
      <p className="text-2xl font-bold md:text-8xl" >404</p>
      <PageHeading classNames="md:mt-4">You are lost 😟</PageHeading>
      <Button className="mt-5">
        <Link to='/'>Run home quickly!</Link>
      </Button>
    </section>
  )
} 
