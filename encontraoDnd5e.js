// Encontrão Resistido com Atletismo
ChatMessage.create({
	content: `<h3 style="color:#630006;">ENCONTRÃO EM UMA CRIATURA</h3>
			  <p>Realizando a ação Atacar, você pode fazer um ataque corpo-a-corpo especial para ir de encontro a uma criatura, seja derrubando-a ou empurrando-a para longe de você.</p>
			  <p>Se você puder fazer múltiplos ataques com a ação Atacar, esse ataque substitui um deles.</p>
			  <p>O alvo do encontrão deve ter no máximo uma categoria de tamanho maior que a sua, e deve estar ao seu alcance.</p>
			  <p>Você realiza um teste de Força (Atletismo) resistido pelo teste de Força (Atletismo) ou Destreza (Acrobacia) – o alvo decide que habilidade usar. Se você vencer o teste resistido, você pode derrubar o alvo no chão ou empurrá-lo 1,5 metro para longe de você.</p>`
});
await token.actor.rollSkill('ath');
for (let target of game.user.targets) {
   target.actor.rollSkill('ath');
}

// Encontrão Resistido com Acrobacia
ChatMessage.create({
	content: `<h3 style="color:#630006;">ENCONTRÃO EM UMA CRIATURA</h3>
			  <p>Realizando a ação Atacar, você pode fazer um ataque corpo-a-corpo especial para ir de encontro a uma criatura, seja derrubando-a ou empurrando-a para longe de você.</p>
			  <p>Se você puder fazer múltiplos ataques com a ação Atacar, esse ataque substitui um deles.</p>
			  <p>O alvo do encontrão deve ter no máximo uma categoria de tamanho maior que a sua, e deve estar ao seu alcance.</p>
			  <p>Você realiza um teste de Força (Atletismo) resistido pelo teste de Força (Atletismo) ou Destreza (Acrobacia) – o alvo decide que habilidade usar. Se você vencer o teste resistido, você pode derrubar o alvo no chão ou empurrá-lo 1,5 metro para longe de você.</p>`
});
await token.actor.rollSkill('ath');
for (let target of game.user.targets) {
   target.actor.rollSkill('acr');
}