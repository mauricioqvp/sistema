import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiPlusCircle } from 'react-icons/fi';

import './new.css';

export default function New() {

    function handleRegister(e){
        e.preventDefault();
        alert("teste");
    }

    return (
        <div>
            <Header />

            <div className='content'>
                <Title name="Novo chamado">
                    <FiPlusCircle size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile' onSubmit={handleRegister}>

                        <label>Cliente</label>
                        <select>
                            <option key={1} value={1}>
                                Sujeito programador
                            </option>
                        </select>

                        <label>Assunto</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Tecnica">Visita Tecnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Assunto</label>
                        <div className='status'>
                            <input 
                                type="radio"
                                name="radio"
                                value="Aberto"
                            />
                            <span>Em aberto</span>

                            <input 
                                type="radio"
                                name="radio"
                                value="Progresso"
                            />
                            <span>Progersso</span>

                            <input 
                                type="radio"
                                name="radio"
                                value="Atendido"
                            />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea
                            type="text"
                            placeholder="Descreva seu problema (opcional)"
                        />
                        <button type='submit'>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}