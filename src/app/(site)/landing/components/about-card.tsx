import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <Card
      shadow={false}
      variant="filled"
      placeholder=""  // Atribuindo uma string vazia ao placeholder
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <CardBody
        className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900"
        placeholder="" // Atribuindo uma string vazia ao placeholder
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography
          variant="h6"
          className="mb-4 text-center"
          color="white"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {subTitle}
        </Typography>

        <Typography
          variant="h4"
          className="text-center"
          color="white"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>

        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {description}
        </Typography>

        <Button
          variant="gradient"
          color="white"
          onClick={() => console.log('Button clicked!')}
          className="my-button-class"
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          view details
        </Button>
      </CardBody>
    </Card>
  );
}

export default AboutCard;
