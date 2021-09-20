import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { FormContainer } from "./style"

const Form = ({propName, setIsAuthenticated}) => {

const schema = yup.object().shape({
    //Validações do formulário
    username: yup.string().required("Nome de usuário é obrigatório"),
    password: yup.string()
                 .required("Nenhuma senha foi fornecida")
                 .min(3, "A senha deve conter no minimo 3 caracteres")
                 

})

const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
}) 

const onSubmitFunction = (data) => {
   axios.post("https://kenzieshop.herokuapp.com/sessions/", data)
        .then((res) => setIsAuthenticated(true))
        .catch((err) => setIsAuthenticated(false))
}

return (
    <FormContainer onSubmit = {handleSubmit(onSubmitFunction)}>
        <div className = "form-group">
            <input type= "text" {...register("username")} required />
            <span>Nome de usuário *</span>
            <p>{errors.username?.message}</p>
        </div>

        <div className = "form-group">
            <input  type = "password" {...register("password")} required/>
            <span>Senha *</span>
            <p>{errors.password?.message}</p>
        </div>

        <button type = "submit">Login</button>
    </FormContainer>
)


}

export default Form