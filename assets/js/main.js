document.addEventListener('DOMContentLoaded', function() {

  // ==========================================================
  // 1. LÓGICA DO MENU DROPDOWN (Corre em todas as páginas)
  // ==========================================================
  const dropdownToggle = document.querySelector('.dropdown > a');
  const dropdownParent = document.querySelector('.dropdown');

  if(dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault(); // Evita que a página faça scroll para o topo
      dropdownParent.classList.toggle('show');
    });

    // Fecha o menu se o utilizador clicar noutro local do site
    document.addEventListener('click', function(e) {
      if (!dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove('show');
      }
    });
  }


  // ==========================================================
  // 2. BASE DE DADOS E LÓGICA: ARTIGOS DO BLOGUE
  // ==========================================================
  // O código só é ativado se detetar que estamos na página do artigo
  const artigoTituloElement = document.getElementById('artigo-titulo');
  
  if (artigoTituloElement) {
    const bdBlogue = {
      'estrategias': {
        titulo: "Educação Financeira Digital: 3 Estratégias para um Futuro Seguro e Consciente",
        data: "Janeiro 16, 2025",
        imagem: "./assets/images/artigo1.webp",
        conteudo: `
          <h2>Por onde começar?</h2>
          <p>Ensinar literacia financeira não é só ensinar a gerir dinheiro. É ensinar a ter valores, a distinguir o essencial do supérfluo, a pensar a longo prazo.</p>
          <p>Neste artigo, partilhamos 3 estratégias essenciais que as famílias podem adotar em casa para preparar os jovens para a economia digital de amanhã.</p>
          <h3>1. Falar abertamente sobre o valor digital</h3>
          <p>Com o fim do dinheiro físico, o dinheiro tornou-se invisível. É crucial mostrar aos jovens como funcionam as carteiras digitais e os pagamentos por MBWay ou contactless.</p>
        `
      },
      'seguranca-ia': {
        titulo: "7 passos de segurança na inteligência artificial para crianças",
        data: "Agosto 18, 2025",
        imagem: "./assets/images/artigo2.webp",
        conteudo: `
          <h2>A IA chegou às escolas e às casas</h2>
          <p>A Inteligência Artificial já não é ficção científica. Está nos telemóveis, nos videojogos e nas ferramentas escolares dos nossos filhos.</p>
          <p>Para garantir que a utilizam de forma ética e segura, compilámos 7 passos cruciais para pais e educadores:</p>
          <ul>
            <li><strong>Passo 1:</strong> Desmistificar a tecnologia. Explicar que a IA não pensa, apenas processa dados.</li>
            <li><strong>Passo 2:</strong> Proteger a privacidade. Nunca partilhar nomes reais, moradas ou fotos com chatbots.</li>
            <li><strong>Passo 3:</strong> Desenvolver pensamento crítico para detetar alucinações (respostas erradas da IA).</li>
          </ul>
        `
      },
      'euro-digital': {
        titulo: "1 – O Euro Digital. Não, não é uma criptomoeda como as outras.",
        data: "Julho 25, 2025",
        imagem: "./assets/images/artigo3.webp",
        conteudo: `
          <h2>O que está a mudar no Banco Central Europeu?</h2>
          <p>Muitas pessoas confundem o futuro Euro Digital com a Bitcoin ou outras criptomoedas. A verdade é muito diferente.</p>
          <p>O Euro Digital será uma CBDC (Central Bank Digital Currency), emitida e garantida pelo Banco Central Europeu. Não terá a volatilidade das criptomoedas tradicionais e servirá como uma extensão do dinheiro físico que usamos todos os dias.</p>
          <h2>Como vai afetar o dia-a-dia?</h2>
          <p>O objetivo é criar uma forma de pagamento europeia, gratuita para os cidadãos, que funcione mesmo offline, garantindo maior privacidade e segurança nas transações europeias.</p>
        `
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    let idArtigo = urlParams.get('id');

    if (!idArtigo || !bdBlogue[idArtigo]) {
      idArtigo = 'estrategias';
    }

    const dados = bdBlogue[idArtigo];

    document.title = dados.titulo + " | Coruja-Academy";
    artigoTituloElement.innerText = dados.titulo;
    document.getElementById('artigo-data').innerText = dados.data;
    document.getElementById('artigo-conteudo').innerHTML = dados.conteudo;
    
    const imagemElement = document.getElementById('artigo-img');
    if (imagemElement) {
      imagemElement.src = dados.imagem;
      imagemElement.onerror = function() {
        this.src = "https://via.placeholder.com/800x400/2A6A65/FFFFFF?text=" + encodeURIComponent(dados.titulo.substring(0,20)) + "...";
      };
    }
  }


  // ==========================================================
  // 3. BASE DE DADOS E LÓGICA: DETALHES DOS PROJETOS
  // ==========================================================
  // O código só é ativado se detetar que estamos na página de detalhe do projeto
  const tituloPaginaElement = document.getElementById('titulo-pagina');
  
  if (tituloPaginaElement) {
    const baseDeDados = {
      'sobre': {
        titulo: "Sobre o Projeto | Coruja-Academy Portugal 2030",
        conteudo: `
          <h2>Identificação da Operação</h2>
          <ul>
            <li><strong>Código da Operação:</strong> CENTRO2030-FSE+-02338300</li>
            <li><strong>Designação:</strong> Coruja-Academy: Literacia Financeira Digital para a Inclusão Social</li>
            <li><strong>Programa:</strong> CENTRO2030 – FSE+</li>
            <li><strong>Beneficiário:</strong> FUTURITY GLIMPSE Unipessoal Lda</li>
          </ul>

          <h2>Objetivos</h2>
          <ul>
            <li>Promover a literacia financeira digital como ferramenta de inclusão social.</li>
            <li>Capacitar crianças, jovens e adultos com deficiência em competências como gestão de orçamento, poupança e tecnologias digitais (IA, blockchain, NFTs).</li>
            <li>Envolver escolas, famílias e instituições locais para criar impacto comunitário duradouro.</li>
          </ul>

          <h2>Duração</h2>
          <ul>
            <li><strong>Data de início:</strong> 15-09-2025</li>
            <li><strong>Data de fim:</strong> 15-09-2028</li>
            <li><strong>Prazo total:</strong> 36 meses</li>
          </ul>

          <h2>Contexto e Justificação</h2>
          <p>
              O projeto nasce da necessidade urgente de melhorar a literacia financeira digital entre jovens de famílias desfavorecidas e jovens adultos com deficiência no concelho de Castanheira de Pêra.
              A falta destas competências compromete a inclusão social, económica e tecnológica. O Coruja-Academy responde com metodologias híbridas, gamificação, uso de IA e blockchain, sempre com foco na aprendizagem prática e no impacto comunitário. 
          </p>
          <p>
              <strong>O impacto desta intervenção encontra-se atualmente em processo de avaliação em colaboração com investigadores da Universidade Católica Portuguesa, permitindo acompanhar de forma científica os resultados obtidos junto dos participantes e da comunidade.</strong>
          </p>
        `
      },
      'atividades': {
        titulo: "Atividades Coruja-Academy Portugal 2030",
        conteudo: `
          <p class="intro-text">O projeto <strong>Coruja-Academy Portugal 2030</strong> dinamiza um conjunto de atividades inovadoras de literacia financeira digital, dirigidas a diferentes públicos e sempre com metodologias práticas, híbridas e gamificadas. Estas ações decorrem ao longo de 36 meses em Castanheira de Pêra e têm como objetivo promover inclusão social, autonomia digital e competências financeiras desde a infância até à idade adulta.</p>
          
          <h2>AEC – Educação Financeira Digital (1.º ciclo)</h2>
          <p>As AEC de Educação Financeira Digital levam semanalmente às escolas aulas em formato híbrido, onde jogos físicos e digitais ajudam as crianças a aprender sobre dinheiro, poupança, escolhas e tecnologias de forma divertida e acessível.</p>

          <h2>Clube da Coruja (5.º–9.º anos)</h2>
          <p>O Clube da Coruja desafia os jovens a desenvolverem projetos colaborativos com recurso a inteligência artificial, Web3, blockchain e segurança digital. É um espaço de criatividade e experimentação.</p>

          <h2>PDCI – Jovens Adultos com Deficiência</h2>
          <p>Em parceria com a CERCICAPER, são realizadas sessões diárias adaptadas, promovendo a autonomia financeira e digital.</p>

          <h2>Plataforma Digital</h2>
          <p>A Plataforma Digital será desenvolvida de forma participada, envolvendo os jovens PDCI nas atividades para que a solução reflita as suas necessidades reais. Para responder à redução do financiamento aprovado, foi definido um modelo partilhado: a empresa a contratar assegura o desenvolvimento técnico de base, com apoio dos parceiros e da componente indireta, enquanto o <strong>técnico do projeto</strong> dedica-se à criação da experiência de utilização e do interface. Esta abordagem equilibrada garante que a plataforma mantém qualidade, é construída em proximidade com os participantes e cumpre os objetivos estabelecidos.</p>

          <h2>Monitorização & Avaliação</h2>
          <p>A monitorização e avaliação do projeto é assegurada por uma entidade externa, que acompanha indicadores de aprendizagem e impacto social, produzindo relatórios periódicos que garantem a transparência e a melhoria contínua.</p>
        `
      },
      'parceiros': {
        titulo: "Parceiros Coruja-Academy Portugal 2030",
        conteudo: `
          <p>O projeto <strong>Coruja-Academy Portugal 2030</strong> conta com dois parceiros estratégicos já formalmente comprometidos.</p>
          <p>A <strong>Câmara Municipal de Castanheira de Pêra</strong> assume-se como principal investidor social, assegurando não apenas o apoio financeiro, mas também o envolvimento direto na implementação local, o que garante a sustentabilidade e o enraizamento do Coruja-Academy na comunidade.</p>
          <p>A <strong>CERCICAPER</strong>, por sua vez, desempenha um papel essencial na área da deficiência, promovendo a integração diária dos jovens adultos PDCI nas atividades e contribuindo para a acessibilidade, a inclusão e o impacto direto na vida dos participantes.</p>
          <p>A presença destes parceiros dá ao projeto maior robustez e credibilidade, assegurando que os objetivos definidos são alcançados com impacto real e positivo na comunidade. Ao mesmo tempo, o Coruja-Academy continua aberto à colaboração com <strong>novos parceiros institucionais e sociais</strong>, que queiram reforçar esta missão e ampliar o impacto do projeto.</p>
        `
      },
      'resultados': {
        titulo: "Resultados Coruja-Academy Portugal 2030",
        conteudo: `
          <h2>Resultados & Métricas – Coruja-Academy Portugal 2030</h2>
          <p>O projeto Coruja-Academy Portugal 2030 foi desenhado com indicadores claros de impacto social e educativo, permitindo medir a sua eficácia ao longo dos 36 meses de execução.</p>

          <h2>Destinatários finais</h2>
          <p>A previsão de abrangência é de 300 crianças do 3.º e 4.º ano, bem como jovens do 5.º ao 9.º ano de famílias economicamente desfavorecidas, e ainda jovens adultos com deficiência apoiados pela CERCICAPER. Estes grupos enfrentam dificuldades significativas devido à falta de literacia financeira digital, o que compromete a sua inclusão social, económica e tecnológica.</p>

          <h2>Principais indicadores de resultado</h2>
          <p>O objetivo central é que pelo menos 210 participantes demonstrem melhorias em 70% das competências trabalhadas, nomeadamente gestão de orçamento, poupança e utilização de tecnologias digitais como blockchain e NFTs.</p>
          <p>Outro indicador relevante é o envolvimento institucional, garantindo pelo menos 3 entidades parceiras no projeto, que asseguram apoio financeiro, pedagógico e tecnológico.</p>

          <h2>Metodologia de avaliação</h2>
          <p>A avaliação será contínua, com monitorização a cada seis meses. Inclui recolha de dados quantitativos e qualitativos através de questionários antes e depois das atividades, observações diretas, relatórios técnicos e entrevistas a familiares e parceiros. Os relatórios anuais consolidam os resultados alcançados e permitem comparações com os objetivos iniciais.</p>

          <h2>Avaliação de impacto</h2>
          <p>A avaliação de impacto do projeto encontra-se a ser desenvolvida em colaboração com investigadores da Universidade Católica Portuguesa, através da análise de indicadores de aprendizagem, inclusão social e desenvolvimento de competências digitais.</p>

          <h2>Impactos esperados</h2>
          <p>Entre os impactos esperados destacam-se: a melhoria da literacia financeira digital, a criação de produtos com rastreabilidade em blockchain, a produção e eventual comercialização de NFTs, e o aumento do diálogo sobre finanças e tecnologia nas famílias envolvidas.</p>
        `
      },
      'financiamento': {
        titulo: "Financiamento & Transparência",
        conteudo: `
          <h2>Financiamento</h2>
          <ul>
            <li><strong>Custo total submetido:</strong> 301.975,13 €.</li>
            <li><strong>Custo total elegível aprovado:</strong> 180.061,64 €.</li>
            <li><strong>Financiamento público total (80%):</strong> 144.049,31 €</li>
            <li><strong>Contribuição privada mínima exigida:</strong> 36.012,33 €.</li>
            <li><strong>Apoio efetivo dos parceiros: 60.395,06 €</strong> (acima do mínimo).</li>
            <li><strong>Orçamento efetivo disponível ≈ 204.444,37 €</strong> (= 144.049,31 € + 60.395,06 €), ainda abaixo do submetido (<strong>301.975,13 €</strong>), com uma diferença de <strong>97.530,76 €</strong>.</li>
          </ul>
        `
      },
      'noticias': {
        titulo: "Notícias & Eventos",
        conteudo: `
          <p class="intro-text">Acompanhe todas as atualizações, marcos e eventos públicos do projeto Coruja-Academy Portugal 2030 nesta secção.</p>
          <p><em>(Esta página será atualizada com relatórios de imprensa, fotografias de reuniões com os municípios parceiros e atividades desenvolvidas nas escolas ao longo dos 36 meses).</em></p>
        `
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    let idDetalhe = urlParams.get('id');

    if (!idDetalhe || !baseDeDados[idDetalhe]) {
      idDetalhe = 'sobre';
    }

    const dadosDetalhe = baseDeDados[idDetalhe];
    
    document.title = dadosDetalhe.titulo + " | Coruja-Academy";
    tituloPaginaElement.innerText = dadosDetalhe.titulo;
    document.getElementById('conteudo-pagina').innerHTML = dadosDetalhe.conteudo;
  }

});