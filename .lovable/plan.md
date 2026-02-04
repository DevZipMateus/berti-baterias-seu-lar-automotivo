
# Correção do Overlay e Fundo da Seção de Serviços

## Problema Identificado
Na versão publicada do site, a seção "Nossos Serviços" não exibe o overlay escuro sobre a imagem de fundo, resultando em baixa legibilidade do conteúdo. A imagem de fundo aparece sem o escurecimento necessário.

## Causa Raiz
A estrutura atual usa divs aninhadas para aplicar a imagem de fundo e o overlay separadamente. Isso pode causar problemas de renderização em diferentes navegadores ou quando o site é publicado/cacheado.

## Solução Proposta
Refatorar a estrutura do background para garantir que o overlay seja aplicado corretamente:

1. **Mover a imagem de fundo para a própria section** usando pseudo-elemento `::before` ou aplicando diretamente na section
2. **Usar uma estrutura mais robusta** com a imagem e overlay como layers separados com `z-index` explícito
3. **Garantir que o overlay tenha posição absoluta** cobrindo toda a seção

## Alterações Técnicas

### Arquivo: `src/components/Services.tsx`

Modificar a estrutura do background de:
```tsx
<section id="servicos" className="relative py-16 sm:py-20 lg:py-24 text-white">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${servicesBg})` }}
  >
    <div className="absolute inset-0 bg-black/85" />
  </div>
  ...
</section>
```

Para uma estrutura mais robusta:
```tsx
<section id="servicos" className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
  {/* Background Image Layer */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${servicesBg})` }}
  />
  {/* Dark Overlay Layer */}
  <div className="absolute inset-0 z-[1] bg-black/85" />
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    ...
  </div>
</section>
```

## Mudanças Específicas
1. Separar a imagem de fundo e o overlay em divs irmãs (não aninhadas)
2. Adicionar `z-index` explícito para cada camada (0 para imagem, 1 para overlay, 10 para conteúdo)
3. Adicionar `overflow-hidden` na section para garantir que nada vaze
4. Manter a opacidade do overlay em 85% (`bg-black/85`) para garantir boa legibilidade

## Resultado Esperado
- O overlay escuro será renderizado corretamente sobre a imagem de fundo
- A legibilidade dos cards e textos será mantida tanto no preview quanto na versão publicada
- Consistência visual entre ambientes de desenvolvimento e produção
