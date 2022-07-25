print('''
    Seja bem-vindo ao Quiz de Compras Publicas.

    Venha saber o quanto está dominando o assunto e aprender muito mais sobre'
''')

print('vamos começar')

print('Sobre o que fala o Decreto-Lei Nº 200, De 25 De Fevereiro De 1967?')
print('a) Estabelece normas de vendas publicas')
print('b) Dispõe sôbre a organização governamental, em esfera pública e privada.')
print('c) Dispõe sôbre a organização da Administração Federal, estabelece diretrizes para a Reforma Administrativa e dá outras providências.')

resposta = input('Qual a alternativa correta?')
   pontos = 0


if resposta == 'b':
    print('Certa resposta')
    pontos = pontos + 1
    
print('Sua pontuação final é', pontos)
