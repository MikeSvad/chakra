import {
    Field, Fieldset
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ExampleForm=()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = data => {
        console.log(data);
    }


    return (<form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
            <input defaultValue="test" {...register("example")} />
        </div>
        
        {/* include validation with required or other standard HTML validation rules */}
     
        <Fieldset.Root>
        <Field.Root invalid={errors.exampleRequired}>
      <Field.Label>exampleRequired</Field.Label>
      <input for="exampleRequired" {...register("exampleRequired", { required: true })} />
      <Field.ErrorText>This field is required</Field.ErrorText>
    </Field.Root>

    <Field.Root invalid={errors.exampleRequired2}>
      <Field.Label>exampleRequired</Field.Label>
      <input for="exampleRequired2" {...register("exampleRequired2", { required: true })} />
      <Field.ErrorText>This field is required</Field.ErrorText>
    </Field.Root>
    </Fieldset.Root>
    <div>
        <label name="exampleRequired">exampleRequired</label>
        <input for="exampleRequired" {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span style={{color: "red"}} >This field is required</span>}
        </div>
        {/* errors will return when field validation fails  */}
        
        <input type="submit" />
        </form>)
}

export default ExampleForm