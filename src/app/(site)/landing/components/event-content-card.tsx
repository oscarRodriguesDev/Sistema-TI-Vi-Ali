import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card
      shadow={false}
      variant="filled"
      placeholder=""  // Atribuindo uma string vazia ao placeholder
      onPointerEnterCapture={() => { }}
      onPointerLeaveCapture={() => { }}
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="bg-gray-800 text-white"
        placeholder=""  // Atribuindo uma string vazia ao placeholder
        onPointerEnterCapture={() => { }}
        onPointerLeaveCapture={() => { }}
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
          quality={100}
        />
      </CardHeader>
      <CardBody className="col-span-full lg:col-span-3"
        placeholder="" // Atribuindo uma string vazia ao placeholder
        onPointerEnterCapture={() => { }}
        onPointerLeaveCapture={() => { }}
      >
        <Typography variant="h6"
          className="text-center mb-2"
          color="orange"
          as="p"
          placeholder="" // Adiciona a propriedade placeholder com string vazia
          onPointerEnterCapture={undefined} // Eventos adicionados com undefined
          onPointerLeaveCapture={undefined}>
          {panel}
        </Typography>
        <Typography variant="h2" color="blue-gray"
          className="text-center mb-2"

          as="p"
          placeholder="" // Adiciona a propriedade placeholder com string vazia
          onPointerEnterCapture={undefined} // Eventos adicionados com undefined
          onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography className="mb-12 md:w-8/12 font-medium !text-gray-500" variant="h6"
          as="p"
          placeholder="" // Adiciona a propriedade placeholder com string vazia
          onPointerEnterCapture={undefined} // Eventos adicionados com undefined
          onPointerLeaveCapture={undefined}>
          {des}
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            src="path_to_image.jpg"
            alt="User Avatar"
            size="lg"
            placeholder=""  // Adicionando o placeholder (pode ser uma string vazia)
            onPointerEnterCapture={() => {}}  // Adicionando a função vazia para onPointerEnterCapture
            onPointerLeaveCapture={() => {}}  // Adicionando a função vazia para onPointerLeaveCapture
          />
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-0.5"

              placeholder="" // Adiciona a propriedade placeholder com string vazia
              onPointerEnterCapture={undefined} // Eventos adicionados com undefined
              onPointerLeaveCapture={undefined}>
              {name}
            </Typography>
            <Typography variant="small" className="font-normal !text-gray-500"

              color="orange"
              as="p"
              placeholder="" // Adiciona a propriedade placeholder com string vazia
              onPointerEnterCapture={undefined} // Eventos adicionados com undefined
              onPointerLeaveCapture={undefined}>
              {position}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
