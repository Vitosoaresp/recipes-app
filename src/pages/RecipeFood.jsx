import React from 'react';

function RecipeFood() {
  return (
    <main>
      <div>
        <div>
          <img data-testid="recipe-photo" src="" alt="" />
        </div>
        <p data-testid="recipe-title">Title</p>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <span data-testid="recipe-category">Categoria</span>
        <ul>
          Ingredientes
          <li data-testid="{index}-ingredient-name-and-measure">Ingrediente 1</li>
        </ul>
        <p data-testid="instructions">Instrução</p>
        <div>
          {/* somente na tela de comidas data-testid="video" */}
          video
        </div>
        <div>
          receitas recomendadas
          {/* data-testid="${index}-recomendation-card" */}
        </div>
        <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
      </div>
    </main>
  );
}

export default RecipeFood;
