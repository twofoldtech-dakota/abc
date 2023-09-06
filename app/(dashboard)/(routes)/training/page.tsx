import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TrainingPage() {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold text-center md:text-4xl">
          Training
        </h2>
        <p className="text-sm font-light text-center text-muted-foreground md:text-lg">subtitle</p>
        <Link href="/training/create" className="flex justify-center">
          <Button variant="default">
            Create
          </Button>
        </Link>
      </div>
    </div>
  )
}
