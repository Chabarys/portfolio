
const sectionCards = document.querySelector("div.projects")
const card = document.querySelector("div.item")
const container = document.querySelector('[data-modal="container"]')

const projects = [
  {
    id: 1,
    name: 'Loveless',
    description: `
      Com a proposta de projeto interdisciplinar baseando-se nos sentimentos da contemporaneidade, em um grupo de 6 amigos, 
      foi selecionado o conceito de amor líquido, termo criado pelo sociólogo Zygmunt Bauman, para transmitir a mensagem da 
      fragilidade dos laços humanos nos relacionamentos passageiros da atualidade. A sensação de efemeridade está cada vez 
      mais vinculada a concepção filosófica do autor, sendo que os relacionamentos em rede (também conhecidos como virtuais)
      ganharam um espaço bem maior entre homens e mulheres nesse novo cenário de desconexão.
      O Loveless é um canal de compartilhamento aberto sobre onde é possível que encontremos o amor líquido, além de demonstrar
      a variedade de editorias onde essa temática se encaixa. A página possuí 7 menus disponíveis, sendo, em ordem: conexões, 
      história, saúde, entretenimento, leitores, vídeos e o sobre. 
      Dentro de diversas temáticas, construir 2 matérias na sessão conexão, os textos são:  “Em épocas de desconexão, 
      ainda há quem nos conecte?” E “ A verdade por trás dos likes”. Ambos citam o quão a sociedade colocou como prioridade o mundo
      virtual do que o real, deixando de lado o toque afetivo. Em seguida, tenho mais um texto na sessão de Entretenimento na 
      parte de filmes, que faz uma análise de filmes que retratam as emoções liquidas
    `,
    image: '../image/works-images/loveless.jpeg',
    link: 'Loveless',
    video: '../video/loveless.mp4'
  },
  {
    id: 2,
    name: 'Rede Azul',
    description: `
      Rede azul é um aplicativo com mais de 1 mil acessos, que indica com pontos azuis os ambientes calmos e adequados 
      para receber pessoas com TEA (Transtorno do Espectro Autista). O Rede Azul é dividido por categorias: escolas, médicos,
      terapias, cursos, capacitações para professores ou responsáveis, agências de turismo (capazes de atender e fazer uma 
      programação que contemplem as necessidades de um autista) e até despachante (profissional necessário para as famílias que 
      recebem descontos em alguns produtos como automóveis).Criado por Elaine Marques, com o propósito de encontrar indicações 
      de especialistas capazes de trabalhar o desenvolvimento de sua filha. Alicia tem Síndrome de Asperger, nível leve do Transtorno do Espectro Autista (TEA), 
      mas passou quatro anos de sua vida com o diagnóstico errado, tomando, inclusive, medicamentos desnecessários e somente aos 12 foi diagnosticada corretamente. 
      A demora em descobrir o que Alicia realmente tinha motivou Elaine e o marido a desenvolverem um aplicativo colaborativo para
      que as famílias tivessem acesso a informações de especialistas de maneira mais rápida e eficiente.
      Por medida de segurança, o responsável interessado em dar dicas precisa entrar em contato com Marques via Instagram, 
      pedindo para ser um colaborador. A ideia é que a pessoa interessada em fazer o movimento realmente se dê o trabalho, e,
      dessa forma, conseguimos eliminar quem não é da causa ou os mal-intencionados.
    `,
    image: '../image/works-images/rede_azul.jpeg',
    link: '',
    video: '../video/rede_azul.mp4'
  },
  {
    id: 3,
    name: 'Religio',
    description: `
      Como proposta de trabalho semestral da Universidade São Judas Tadeu para os cursos de comunicação social,
      o projeto “Ser Pertencer: Esse espaço também é meu” surge com diversos subtemas importantes e que 
      abordarão as ideias de pertencimento e aceitação em âmbito estudantil e social.  
      É dentro dessa temática e da necessidade de dar voz às diversas práticas religiosas presentes em sociedade que nasce o 
      Religio, um dos segmentos apresentados na instituição ao final do semestre. Partindo do princípio de que nem todo 
      indivíduo tem contato direto com diferentes crenças, a proposta tem por finalidade apresentar novas perspectivas sob 
      doutrinas mitificadas por crendices populares, analisando o espaço que cada uma ocupa em sociedade e procurando 
      demonstrar como é visto atualmente os âmbitos de identidade e pertencimento sob o prisma religioso.
      Em resumo, o termo religião diz respeito a um conjunto de crenças e filosofias que são seguidas por um grande 
      número de pessoas. Dentre as diversas religiões existentes, o Religio irá explorar: a umbanda, o budismo, o islamismo, 
      o espiritismo e o judaísmo.
    `,
    image: '../image/works-images/religio.jpeg',
    link: '',
    video: '../video/religio.mp4'
  },  
  {
    id: 4,
    name: 'The Oriental BBQ',
    description: `
      O TCC de Publicidade e Propaganda foi trabalhar com um cliente real. O The Oriental BBQ é o primeiro pub asiático na 
      cidade de São Paulo. O criador e fundador é Vinicius Ikeda. 
      A proposta é criar a interface com o cliente, montando briefing para criação de campanhas dentro do The Oriental. 
      Houve um planejamento durante 3 meses para criar campanhas e novos meios de divulgação do restaurante. 
      Visto a necessidade de um cardápio adaptável e visualmente atraente, cartões de visita para quem não possui a 
      flexibilidade e acesso a algumas redes sociais, foram criados briefing para chegar no resultado final.
    `,
    image: '../image/works-images/the_oriental_bbq.jpeg',
    link: '',
    video: '../video/rede_azul.mp4'
  },
]

projects.map(project => {
  const cardClone = card.cloneNode(true)
  cardClone.setAttribute("id", project.id)
  cardClone.setAttribute("name", project.name)
  cardClone.setAttribute("description", project.description)
  cardClone.setAttribute("image", project.image)
  cardClone.querySelector("img").src = project.image
  cardClone.setAttribute("video", project.video)
  cardClone.setAttribute("link", project.link)
  sectionCards.appendChild(cardClone)
})

card.remove()

const modalOverlay = document.querySelector(".modal-container")
const modal = document.querySelector(".modal")
const cards = [...document.querySelectorAll(".cards .projects .item")]

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalOverlay.classList.add("active")
    modal.classList.add("active")
    modal.querySelector('.project-title').innerHTML = card.getAttribute("name")
    modal.querySelector('.project-description').innerHTML = card.getAttribute("description")
    modal.querySelector('img').src = card.getAttribute("image")
    modal.querySelector('#link').innerHTML = card.getAttribute("link")
    modal.querySelector('video').src = card.getAttribute("video")
    if(card.getAttribute("id") == 4) {
      document.querySelector("video").style.display = 'none'
    } else {
      document.querySelector("video").style.display = 'flex'
    }

    if(card.getAttribute("link") === '') {
      document.querySelector(".link").style.display = 'none'
    } else {
      document.querySelector(".link").style.display = 'block'
    }
  })
})

document.querySelector(".close").addEventListener("click", () => modalOverlay.classList.remove("active"))

function clickOutModal(event) {
  event.target === this ? closeModal(event) : null
}

function closeModal(event) {
  event.preventDefault()
  container.classList.remove('active')
}
container.addEventListener('click', clickOutModal)