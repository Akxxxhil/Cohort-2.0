const zod=require("zod")

// just check whther the array its made by a number or not


function validate(){
    const array=[7,8,9];

    const schema=zod.array(zod.number())
    const response=schema.safeParse(array)
    console.log(response);
}
validate()