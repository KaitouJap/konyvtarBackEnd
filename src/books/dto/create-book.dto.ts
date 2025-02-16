import { Prisma } from "@prisma/client";
import { IsBoolean, IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateBookDto implements Prisma.bookCreateInput  {
    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsInt()
    @Min(0)
    year: number;

    @IsString()
    @IsNotEmpty()
    genre: string;

    @IsInt()
    @Min(0)
    pages: number;

    @IsBoolean()
    available: boolean;
}
