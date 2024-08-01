# Frontend

<!-- adm@sitesdigitais.com -->
Organização das Pastas e Componentes
Estrutura Geral das Pastas:

Components: Esta pasta conterá todos os componentes da aplicação.
create-data: Esta será a pasta principal que conterá os componentes relacionados ao cadastro do candidato.
step01-cadastro-candidato: Componente para a primeira página de cadastro.
step02-endereco-residencial: Componente para a segunda página de endereço residencial.
step03-endereco-comite: Componente para a terceira página de endereço do comitê.
step04-endereco-justica-eleitoral: Componente para a quarta página de endereço para justiça eleitoral.
step05-endereco-cnpj: Componente para a quinta página de endereço do CNPJ.
step06-dados-cadastrais: Componente para a sexta página de dados cadastrais do candidato.
step07-documentos-anexos: Componente para a sétima página de documentos anexos.
shared: Componentes reutilizáveis.
select-estado: Componente para o select de estados.
input-telefone: Componente para os inputs de telefone.
input-cpf: Componente para o input de CPF.
input-rg: Componente para o input de RG.
input-titulo-eleitoral: Componente para o input de título eleitoral.
select-raca: Componente para o select de raça/cor.
select-estado-civil: Componente para o select de estado civil.
select-grau-instrucao: Componente para o select de grau de instrução.
Services: Esta pasta conterá todos os serviços da aplicação.
Authentication: Serviço de autenticação.
ServiceSheet: Serviço para interação com a planilha.
Models: Esta pasta conterá todas as interfaces e modelos da aplicação.
Rotas:

As rotas serão configuradas para cada um dos componentes de etapa, facilitando a navegação entre as páginas.
A navegação entre as etapas será gerenciada pelo componente pai CreateDataComponent.
Componentes Compartilhados:

shared: Esta pasta conterá componentes reutilizáveis que serão usados em várias etapas do formulário.
Cada componente reutilizável será autônomo e terá seu próprio HTML, CSS, e lógica, tornando-o fácil de manter e reutilizar.
Explicação Detalhada:
Estrutura de Componentes por Etapa:

Cada etapa do formulário será um componente Angular separado. Isso facilitará a manutenção e permitirá que você trabalhe em cada etapa independentemente.
Por exemplo, a primeira etapa step01-cadastro-candidato terá seu próprio componente que gerencia apenas os campos e a lógica associados a essa etapa.
Componentes Reutilizáveis:

Componentes como select-estado, input-telefone, input-cpf, etc., serão colocados na pasta shared e reutilizados em diferentes etapas.
Esses componentes receberão os dados necessários através de @Input bindings e emitir eventos através de @Output bindings, se necessário.
Serviços:

Os serviços para manipulação dos dados do formulário e autenticação serão centralizados na pasta Services.
O serviço ServiceSheet lidará com as operações CRUD para a planilha.
Benefícios:
Manutenção Facilitada:

Com cada etapa do formulário sendo um componente separado, a manutenção e a adição de novos campos ou lógica será mais simples e organizada.
Reutilização de Código:

Componentes reutilizáveis na pasta shared evitam duplicação de código e facilitam atualizações consistentes.
Escalabilidade:

Esta estrutura modular facilita a adição de novas funcionalidades ou etapas no futuro, mantendo o código organizado e limpo.
Clareza e Organização:

A separação clara entre componentes de etapas e componentes reutilizáveis torna o projeto mais compreensível e fácil de navegar.
