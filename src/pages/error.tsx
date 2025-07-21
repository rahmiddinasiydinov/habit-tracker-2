import { Button } from "@/components/ui/button"
import PageHeading from "@/shared/components/page-heading"
import { Link } from "react-router-dom"

type Props = {}

export default function ErrorPage({ }: Props) {
  return (
    <section className="text-center mt-4 md:mt-10">
      <PageHeading>You are lost 😟</PageHeading>
      <Button className="mt-10">
        <Link to='/'>Run home quickly!</Link>
      </Button>
    </section>
  )
} 
