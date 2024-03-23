function changePersonType() {
    let allInputRadio = document.getElementsByName('person-type');
    for (let i = 0; i < allInputRadio.length; i++) {
        if (allInputRadio[i].checked && allInputRadio[i].id == 'aluno') {
            document.getElementById('container-professor').style.display = "none";
            document.getElementById('container-aluno').style.display = "block";            
        } else if (allInputRadio[i].checked && allInputRadio[i].id == 'professor') {
            document.getElementById('container-aluno').style.display = "none";
            document.getElementById('container-professor').style.display = "block";
        }
    }
}

function Pessoa(){
    var nome;
    var email;
    var dataNascimento;
    var telefoneFixo;
    var telefoneCelular;
    var matricula;

    this.setNome = function(vNome){
        this.nome = vNome;
    }
    this.getNome = function(){
        return this.nome;
    }

    this.setEmail = function(vEmail){
        this.email = vEmail;
    }
    this.getEmail = function(){
        return this.email;
    }

    this.setDataNascimento = function(vDataNascimento){
        this.dataNascimento = vDataNascimento;
    }
    this.getDataNascimento = function(){
        return this.dataNascimento;
    }

    this.setTelefoneFixo = function(vTelefoneFixo){
        this.telefoneFixo = vTelefoneFixo;
    }
    this.getTelefoneFixo = function(){
        return this.telefoneFixo;
    }

    this.setTelefoneCelular = function(vTelefoneCelular){
        this.telefoneCelular = vTelefoneCelular;
    }
    this.getTelefoneCelular = function(){
        return this.telefoneCelular;
    }

    this.setMatricula = function(vMatricula){
        this.matricula = vMatricula;
    }
    this.getMatricula = function(){
        return this.matricula;
    }
}

function Aluno(){

    Pessoa.call(this);

    var curso

    this.setCurso = function(vCurso){
        this.curso = vCurso;
    }
    this.getCurso = function(){
        return this.curso;
    }
}

function Professor(){
    Pessoa.call(this);

    var area;
    var lattes;

    this.setArea = function(vArea){
        this.area = vArea;
    }
    this.getArea = function(){
        return this.area;
    }

    this.setLattes = function(vLattes){
        this.lattes = vLattes;
    }
    this.getLattes = function(){
        return this.lattes;
    }
}

function convertDateToPtBr(date) {
    var dateObj = new Date(date);
    var dia = dateObj.getDate();
    var mes = dateObj.getMonth() + 1;
    var ano = dateObj.getFullYear();
    return dia + '/' + mes + '/' + ano;
}

function main() {

    if (document.getElementById('aluno').checked) {
        var aluno = new Aluno();
        aluno.setNome(document.getElementById('nome').value);
        aluno.setEmail(document.getElementById('email').value);
        aluno.setDataNascimento(convertDateToPtBr(document.getElementById('data-nascimento').value));
        aluno.setTelefoneFixo(document.getElementById('telefone-fixo').value);
        aluno.setTelefoneCelular(document.getElementById('telefone-celular').value);
        aluno.setMatricula(document.getElementById('matricula').value);
        aluno.setCurso(document.getElementById('curso').value);
        alert("DADOS DO ALUNO" +
        "\nNome: " + aluno.getNome() +
        "\nEmail: " + aluno.getEmail() +
        "\nData de nascimento: " + aluno.getDataNascimento() +
        "\nTelefone fixo: " + aluno.getTelefoneFixo() +
        "\nTelefone celular: " + aluno.getTelefoneCelular() +
        "\nMatrícula: " + aluno.getMatricula() +
        "\nCurso: " + aluno.getCurso());
    } else if (document.getElementById('professor').checked) {
        var professor = new Professor();
        professor.setNome(document.getElementById('nome').value);
        professor.setEmail(document.getElementById('email').value);
        professor.setDataNascimento(convertDateToPtBr(document.getElementById('data-nascimento').value));
        professor.setTelefoneFixo(document.getElementById('telefone-fixo').value);
        professor.setTelefoneCelular(document.getElementById('telefone-celular').value);
        professor.setMatricula(document.getElementById('matricula').value);
        professor.setArea(document.getElementById('area-atuacao').value);
        professor.setLattes(document.getElementById('link-lattes').value);
        alert("DADOS DO PROFESSOR" +
        "\nNome: " + professor.getNome() +
        "\nEmail: " + professor.getEmail() +
        "\nData de nascimento: " + professor.getDataNascimento() +
        "\nTelefone fixo: " + professor.getTelefoneFixo() +
        "\nTelefone celular: " + professor.getTelefoneCelular() +
        "\nMatrícula: " + professor.getMatricula() +
        "\nÁrea de atuação: " + professor.getArea() + 
        "\nLink lattes: " + professor.getLattes());
    }
}