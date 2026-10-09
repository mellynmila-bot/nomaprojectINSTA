export interface FeatureItem {
  id: number;
  category: 'Identidade e design' | 'Conteúdo' | 'Marcações' | 'Visibilidade' | 'Técnico';
  icon: string;
  title: string;
  miniExplanation: string;
  paraQueServe: string;
  isSpecialNotice?: boolean;
}

export const FEATURES_DATA: FeatureItem[] = [
  // 1. Identidade e design
  {
    id: 1,
    category: 'Identidade e design',
    icon: 'Palette',
    title: 'Identidade visual desenvolvida',
    miniExplanation: 'Criamos o visual do site a partir da tua marca: cores, fontes e estilo. Cada projeto é único, nunca um modelo pronto.',
    paraQueServe: 'Garante que o site reflete a personalidade genuína do teu estúdio e cria uma primeira impressão memorável, distanciando-te de modelos genéricos ou amadores que outros usam.'
  },
  {
    id: 2,
    category: 'Identidade e design',
    icon: 'Smartphone',
    title: 'Design responsivo',
    miniExplanation: 'O site fica perfeito no telemóvel, no tablet e no computador. A maioria dos clientes chega pelo telemóvel.',
    paraQueServe: 'Mais de 80% dos clientes de estúdios abrem o link pelo telemóvel a partir do Instagram ou WhatsApp. Garantimos leitura fluida, botões fáceis de tocar e zero quebras de imagem em qualquer ecrã.'
  },
  {
    id: 3,
    category: 'Identidade e design',
    icon: 'Sparkles',
    title: 'Animações modernas',
    miniExplanation: 'Movimento suave que dá vida ao site e prende a atenção, sem o deixar lento.',
    paraQueServe: 'Transições suaves e pequenos toques de movimento tornam a navegação envolvente e sofisticada, retendo o visitante por mais tempo sem comprometer a velocidade de abertura.'
  },
  {
    id: 4,
    category: 'Identidade e design',
    icon: 'Compass',
    title: 'Navegação simples',
    miniExplanation: 'Tudo numa só página, com menu que leva o visitante à secção certa num toque.',
    paraQueServe: 'Elimina menus confusos e cliques desnecessários. O cliente encontra portfólio, equipa, localização e botão de marcação em escassos segundos, com scroll fluido.'
  },

  // 2. Conteúdo
  {
    id: 5,
    category: 'Conteúdo',
    icon: 'PenTool',
    title: 'Copywriting profissional',
    miniExplanation: 'Textos escritos para explicar o teu trabalho com clareza e levar o visitante à marcação.',
    paraQueServe: 'Palavras que comunicam a proposta de valor do teu espaço sem rodeios, respondendo às hesitações comuns do cliente e guiando-o com confiança até ao contacto.'
  },
  {
    id: 6,
    category: 'Conteúdo',
    icon: 'Image',
    title: 'Galeria / portfólio',
    miniExplanation: 'Mostra o teu trabalho em alta qualidade, organizado por estilo ou serviço, para o cliente ver a tua arte logo.',
    paraQueServe: 'Permite apresentar trabalhos finalizados em alta resolução, separados por categorias de estilo, para que o visitante encontre imediatamente a referência que deseja.'
  },
  {
    id: 7,
    category: 'Conteúdo',
    icon: 'Maximize2',
    title: 'Visualizador de imagens',
    miniExplanation: 'O visitante abre as fotos em grande e passa de uma para outra com um deslize.',
    paraQueServe: 'Facilita a visualização minuciosa de pormenores artísticos com ampliação em ecrã inteiro e navegação tátil por deslize lateral no telemóvel.'
  },
  {
    id: 8,
    category: 'Conteúdo',
    icon: 'Users',
    title: 'Artistas e equipa',
    miniExplanation: 'Um cartão para cada profissional, com especialidade e link direto para o Instagram.',
    paraQueServe: 'Dá rosto aos talentos da casa, destaca os estilos em que cada profissional brilha e encaminha o cliente direto para o portfólio ou contacto individual daquele artista.'
  },
  {
    id: 9,
    category: 'Conteúdo',
    icon: 'HeartHandshake',
    title: 'Sobre e valores',
    miniExplanation: 'Conta a história do espaço e o que defendes, para o cliente se identificar antes de marcar.',
    paraQueServe: 'Humaniza a marca e cria conexão emocional. Os clientes valorizam saber a ética de trabalho, o percurso e o cuidado dedicado a cada atendimento.'
  },
  {
    id: 10,
    category: 'Conteúdo',
    icon: 'Video',
    title: 'Reels e vídeos',
    miniExplanation: 'O visitante vê o teu trabalho em movimento sem sair do site.',
    paraQueServe: 'O vídeo transmite a vibração do ambiente, o processo de criação e o resultado final em movimento, aumentando exponencialmente o desejo de agendamento.'
  },
  {
    id: 11,
    category: 'Conteúdo',
    icon: 'MessageSquareQuote',
    title: 'Depoimentos',
    miniExplanation: 'Opiniões reais de clientes, que dão confiança a quem ainda não te conhece.',
    paraQueServe: 'A prova social derruba a insegurança de novos clientes que chegam pela primeira vez, validando a qualidade do serviço e o atendimento do espaço.'
  },
  {
    id: 12,
    category: 'Conteúdo',
    icon: 'ShieldCheck',
    title: 'O espaço e o ambiente',
    miniExplanation: 'Fotos, higiene, privacidade e regras, para o cliente saber o que esperar.',
    paraQueServe: 'Tranquiliza o visitante demonstrando o rigor dos protocolos sanitários, o conforto dos postos de trabalho e a privacidade reservada a cada cliente.'
  },
  {
    id: 13,
    category: 'Conteúdo',
    icon: 'HelpCircle',
    title: 'Perguntas frequentes',
    miniExplanation: 'Responde às dúvidas mais comuns antes de chegarem à tua DM, poupando-te tempo.',
    paraQueServe: 'Filtra questões repetitivas (cuidados pós-procedimento, métodos de pagamento, acompanhantes, orçamentos), para receberes contactos já qualificados e prontos a avançar.'
  },

  // 3. Marcações
  {
    id: 14,
    category: 'Marcações',
    icon: 'CalendarCheck',
    title: 'Integração com agendamento',
    miniExplanation: 'Cada botão leva o cliente direto ao Instagram, WhatsApp ou sistema de marcação do profissional certo.',
    paraQueServe: 'Elimina barreiras de conversão. Em apenas um clique, o cliente inicia a conversa com a mensagem certa ou acede à agenda do artista pretendido.'
  },
  {
    id: 15,
    category: 'Marcações',
    icon: 'FileText',
    title: 'Guia para o pedido',
    miniExplanation: 'Explica ao cliente o que enviar (tamanho, referências, disponibilidade), para os pedidos chegarem completos.',
    paraQueServe: 'Poupa trocas infindáveis de mensagens na DM. O cliente aprende de antemão o que deves saber para avaliar o projeto e dar orçamento com rapidez.'
  },
  {
    id: 16,
    category: 'Marcações',
    icon: 'Send',
    title: 'Contacto direto',
    miniExplanation: 'Botão de WhatsApp ou mensagem: o cliente clica e fala contigo.',
    paraQueServe: 'Um canal instantâneo e amigável com mensagem pré-preenchida para o cliente não ter trabalho a redigir o primeiro contacto.'
  },
  {
    id: 17,
    category: 'Marcações',
    icon: 'MapPin',
    title: 'Google Maps',
    miniExplanation: 'Mostra a tua localização e dá direções num toque. Se o espaço for privado, mostra só a zona.',
    paraQueServe: 'Facilita a chegada de quem já marcou e mostra a proximidade para novos clientes da região. Pode ser morada exata ou delimitação de bairro/zona privada.'
  },

  // 4. Visibilidade
  {
    id: 18,
    category: 'Visibilidade',
    icon: 'Search',
    title: 'SEO',
    miniExplanation: 'Organizamos o site para o Google perceber o que fazes e onde. É o que ajuda a ser encontrado em pesquisas como "tatuador em Lisboa".',
    paraQueServe: 'Estruturação técnica de títulos, cabeçalhos e termos de pesquisa local. Permite ao Google indexar e reconhecer o teu espaço para pesquisas orgânicas relevantes na tua cidade.',
    isSpecialNotice: true
  },
  {
    id: 19,
    category: 'Visibilidade',
    icon: 'Cpu',
    title: 'GEO',
    miniExplanation: 'Prepara o conteúdo para ferramentas de IA, como o ChatGPT e o Gemini, perceberem quem és e poderem recomendar-te.',
    paraQueServe: 'Generative Engine Optimization: formatação semântica para que modelos de linguagem e assistentes inteligentes identifiquem a tua especialidade e te citem quando alguém perguntar por estúdios de referência na zona.',
    isSpecialNotice: true
  },
  {
    id: 20,
    category: 'Visibilidade',
    icon: 'BrainCircuit',
    title: 'AIO',
    miniExplanation: 'Escrevemos em perguntas e respostas claras, para o teu estúdio ter mais hipóteses de surgir nos resumos que o Google e as IAs mostram.',
    paraQueServe: 'AI Overview Optimization: secções com respostas diretas a perguntas específicas, aumentando a hipótese de seres a fonte selecionada pelos motores de busca para o topo da página.',
    isSpecialNotice: true
  },
  {
    id: 21,
    category: 'Visibilidade',
    icon: 'Code2',
    title: 'Dados estruturados',
    miniExplanation: 'Informação técnica invisível que ajuda o Google a entender o teu negócio (nome, serviços, zona).',
    paraQueServe: 'Etiquetas Schema.org invisíveis no código que comunicam diretamente com robôs de busca detalhes oficiais como morada, horário de funcionamento, categoria comercial e perfis sociais.'
  },
  {
    id: 22,
    category: 'Visibilidade',
    icon: 'Share2',
    title: 'Pré-visualização ao partilhar',
    miniExplanation: 'Quando o link é enviado no WhatsApp ou Instagram, aparece uma imagem e um título cuidados.',
    paraQueServe: 'Gera cartões de partilha (Open Graph) elegantes com capa e descrição polidas quando envias o link a um amigo ou cliente por mensagem privada.'
  },
  {
    id: 23,
    category: 'Visibilidade',
    icon: 'Link2',
    title: 'Link profissional',
    miniExplanation: 'Um endereço único para usar na bio do Instagram e no Google Meu Negócio.',
    paraQueServe: 'Substitui páginas de árvore de links genéricas e despersonalizadas por um domínio oficial do estúdio, consolidando toda a autoridade digital na tua própria marca.'
  },

  // 5. Técnico
  {
    id: 24,
    category: 'Técnico',
    icon: 'Globe',
    title: 'Multilíngue',
    miniExplanation: 'O visitante escolhe o idioma (por exemplo PT, EN, ES, RU) para uma experiência adaptada a turistas e clientes de várias origens.',
    paraQueServe: 'Fundamental para estúdios que recebem turistas ou clientes internacionais, permitindo comutar o conteúdo para inglês ou outro idioma à escolha.'
  },
  {
    id: 25,
    category: 'Técnico',
    icon: 'Zap',
    title: 'Velocidade otimizada',
    miniExplanation: 'Imagens comprimidas e carregamento rápido, porque quem espera, sai.',
    paraQueServe: 'Carregamento quase instantâneo mesmo em redes móveis 4G lentas, garantindo que o visitante não desiste antes de o portfólio abrir.'
  },
  {
    id: 26,
    category: 'Técnico',
    icon: 'Lock',
    title: 'Segurança (HTTPS)',
    miniExplanation: 'Cadeado de segurança em todo o site, que o Google e os visitantes valorizam.',
    paraQueServe: 'Certificado SSL automático com criptografia ponto a ponto. Transmite proteção e fiabilidade aos visitantes e é exigência obrigatória dos motores de busca.'
  },
  {
    id: 27,
    category: 'Técnico',
    icon: 'Accessibility',
    title: 'Acessibilidade básica',
    miniExplanation: 'Contraste, navegação por teclado e descrição das imagens, para o site funcionar para todos.',
    paraQueServe: 'Garante conformidade com normas web essenciais, assegurando boa leitura a pessoas com limitações visuais e permitindo navegação fluida por teclado e leitores de ecrã.'
  },
  {
    id: 28,
    category: 'Técnico',
    icon: 'Bookmark',
    title: 'Favicon e identidade no browser',
    miniExplanation: 'O teu símbolo aparece no separador do navegador.',
    paraQueServe: 'O ícone do teu logotipo surge destacado nas abas do Chrome, Safari e marcadores dos clientes, conferindo acabamento executivo de alto padrão.'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Conversa',
    description: 'Percebo a tua marca e o que queres mostrar.',
    detail: 'Alinhamos o estilo do estúdio, os artistas, os serviços em destaque e o público que queres atrair.'
  },
  {
    number: '02',
    title: 'Esboço',
    description: 'Recebes a proposta visual para ver e aprovar.',
    detail: 'O site fica pronto em 24h para aprovação do cliente, navegável no telemóvel e no computador.'
  },
  {
    number: '03',
    title: 'Ajustes',
    description: 'Refinamos textos, fotos e detalhes contigo.',
    detail: 'Ajustamos os portfólios, as descrições e os botões de marcação até ficar perfeito para o teu estúdio.'
  },
  {
    number: '04',
    title: 'Publicação',
    description: 'O site vai para o ar, com domínio e alojamento prontos.',
    detail: 'Lançamento oficial. Fica pronto a colocar na bio do Instagram e partilhar por mensagem com clientes.'
  }
];

export const PARTNERSHIP_BENEFITS = [
  {
    id: 'domain_host',
    title: 'Domínio e alojamento incluídos',
    description: 'Recebes tudo pronto a funcionar, com endereço próprio e servidores configurados.',
    tag: 'Tudo pronto'
  },
  {
    id: 'no_monthly',
    title: 'Sem mensalidades',
    description: 'Não pagas uma renda mensal pelo site. O investimento é inicial e cobre a construção e a parceria acordada.',
    tag: 'Sem rendas'
  },
  {
    id: 'five_years',
    title: '5 anos de parceria',
    description: 'O site fica ativo, monitorizado e cuidado durante 5 anos com suporte contínuo.',
    tag: 'Compromisso longo'
  },
  {
    id: 'location_change',
    title: 'Mudou de local? Sem custo extra',
    description: 'Atualizamos a morada, mapa e instruções de chegada sem qualquer cobrança adicional.',
    tag: 'Flexibilidade'
  },
  {
    id: 'team_change',
    title: 'Mudou a equipa? Sem custo extra',
    description: 'Entra ou sai um artista e o site acompanha com nova foto, bio e link de agendamento.',
    tag: 'Equipa dinâmica'
  },
  {
    id: 'simple_edits',
    title: 'Alterações simples incluídas',
    description: 'Substituição periódica de fotos, ajustes de textos e novos horários com acompanhamento contínuo.',
    tag: 'Sempre atualizado'
  },
  {
    id: 'direct_support',
    title: 'Suporte direto por mensagem',
    description: 'Falas diretamente comigo por mensagem privada no Instagram quando precisares de algo. Sem intermediários.',
    tag: 'Contacto humano'
  }
];

export const TIMELINE_5_YEARS = [
  {
    year: 'Ano 1',
    phase: 'Lançamento & Afinação',
    summary: 'Configuração do domínio, colocação online, primeiras afinações e início da leitura pelo Google.'
  },
  {
    year: 'Ano 2',
    phase: 'Consolidação de Portfólio',
    summary: 'Renovação de trabalhos fotográficos, atualização de novos serviços e estabilização de visitas.'
  },
  {
    year: 'Ano 3',
    phase: 'Ajustes de Mercado',
    summary: 'Afinação de perguntas frequentes, atualização de horários e revisão técnica de desempenho.'
  },
  {
    year: 'Ano 4',
    phase: 'Expansão da Equipa',
    summary: 'Ajustes de artistas convidados ou novas contratações, morada se houver mudança de espaço.'
  },
  {
    year: 'Ano 5',
    phase: 'Maturidade & Renovação',
    summary: 'Balanço de 5 anos de presença online sólida e planeamento do ciclo seguinte da marca.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'O domínio e o alojamento estão incluídos?',
    answer: 'Sim, recebes tudo pronto a usar. Tratamos da configuração técnica do domínio e da infraestrutura de alojamento para não teres de mexer em nada técnico.'
  },
  {
    question: 'Pago mensalidade?',
    answer: 'Não pagas uma mensalidade pelo site. O investimento é inicial e cobre a construção e a parceria acordada.'
  },
  {
    question: 'Posso mudar textos e fotos depois?',
    answer: 'Sim, alterações simples fazem parte da parceria (como atualizar fotos de novos trabalhos, trocar horários ou ajustar contactos).'
  },
  {
    question: 'E se mudarmos de morada ou de artistas?',
    answer: 'Atualizamos sem custo extra dentro dos 5 anos de parceria. Se a equipa crescer ou o estúdio mudar de espaço, o site atualiza a morada, o mapa e os cartões de profissionais.'
  },
  {
    question: 'O site vai aparecer no Google?',
    answer: 'Fica preparado e bem estruturado para isso (com SEO, GEO e dados técnicos). O objetivo é ser rankeado organicamente com o tempo à medida que os motores de busca leem o site. Não prometemos primeiro lugar artificial nem resultados de um dia para o outro, mas sem um site próprio essa presença orgânica seria impossível.'
  },
  {
    question: 'O que preciso de enviar?',
    answer: 'Apenas fotos dos trabalhos e do espaço, textos base ou ideias do que queres dizer, links do Instagram e o que quiseres destacar. Nós tratamos do resto do texto e do design.'
  }
];

export const DEFAULT_CLIENT_NAME = 'NOMA';
export const INSTAGRAM_HANDLE = '@inkcode.web';
export const INSTAGRAM_URL = 'https://www.instagram.com/inkcode.web/';

