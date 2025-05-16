"use client"

import { Button } from "@/components/ui/button"

type QuickReplyButtonProps = {
  text: string
  onClick: () => void
}

export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground"
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
