import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  User,
  StarIcon,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div id="contact" className="lg:w-250 place-items-center">
      <h1 className="text-4xl font-bold text-white mb-4 border-b border-white py-5 w-full">
        Contact Me
      </h1>
      <div className="grid w-full max-w-3xl gap-6 mx-7 mt-10 text-center">
        <h2 className="text-1xl font-semibold text-gray-300">
          Have a project in mind or want to collaborate? Feel free to reach out
          and I'll get back to you as soon as possible.
        </h2>
        <InputGroup>
          <InputGroupInput type="email" placeholder="Enter your Name" />
          <InputGroupAddon>
            <User />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput type="email" placeholder="Enter your email" />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
        <Textarea placeholder="Type your message here." />
        <Button
          variant="outline"
          size="lg"
          className="text-white border-white bg-black/10"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
