import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/sales.css';
import Estabelecimento from '../../../assets/img/logo.png';

function Index() {
    return (
        <form className = "teste container" >
          <div className = "borda"> 
          <img src={Estabelecimento} alt="Estabelecimento" className = "foto"/>
          </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="validatedCustomFile" required></input>
            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
            <div class="invalid-feedback">Example invalid custom file feedback</div>
          </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Nome</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Caio Villardo Jardelino Pessanha Bastos"></input>
        
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Senha</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="********"></input>
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress2">CNPJ</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="548.762.565/5555-60"></input>
        </div>
        <div className="form-group">
          <label for="inputAddress">Endereço</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Rua Mal Floriano 1157"></input>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Cidade</label>
            <input type="text" className="form-control" id="inputCity" placeholder="Foz do Iguaçu"></input>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Estado</label>
            <select id="inputState" className="form-control">
              <option selected>Escolha</option>
              <option>Acre (AC)</option>
              <option>Alagoas (AL)</option>
              <option>Amapá (AM)</option>
              <option>Amazonas (AM)</option>
              <option>Bahia (BA)</option>
              <option>Ceará (CE)</option>
              <option>Distrito Federal (DF)</option>
              <option>Espírito Santo (ES)</option>
              <option>Goiás (GO)</option>
              <option>Maranhão (MA)</option>
              <option>Mato Grosso (MT)</option>
              <option>Mato Grosso do Sul (MS)</option>
              <option>Minas Gerais (MG)</option>
              <option>Pará (PA)</option>
              <option>Paraíba (PB)</option>
              <option>Paraná (PR)</option>
              <option>Pernambuco (PE)</option>
              <option>Piauí (PI)</option>
              <option>Rio de Janeiro (RJ)</option>
              <option>Rio Grande do Norte (RN)</option>
              <option>Rio Grande do Sul (RS)</option>
              <option>Rondônia (RO)</option>
              <option>Roraima (RR)</option>
              <option>Santa Catarina (SC)</option>
              <option>São Paulo (SP)</option>
              <option>Sergipe (SE)</option>
              <option>Tocantins (TO)</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">CEP</label>
            <input type="text" className="form-control" id="inputZip" placeholder="85851-020"></input>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Editar</button>
      </form>

    );
}

export default Index;