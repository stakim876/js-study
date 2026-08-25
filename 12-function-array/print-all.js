function mOwnRecipe(recipe) {
 console.log('==== 나만의 레시피 ===');
 console.log('# 아래에 당신의 레시피를 알려주세요. ');
 console.log(recipe);
 console.log('==== 멋진 레시피네요 ! ====');
}
function myQwnRecipe2(recipel, recipel2) {
 console.log('==== 나만의 레시피 ====');
 console.log('# 아래의 레시피를 알려주세요.');
 console.log(recipel);
 console.log(recipe2);
 console.log('===== 멋진 레시피네요! ===' );
}

function myOwnRecipe3(recipeList) {
  console.log('==== 나만의 레시피 ====');
  console.log('# 아래에 당신의 레시피를 알려주세요. ');
  for (const recipe of recipeList) {
    console.log(recipe);
  }
  console.log('==== 멋진 레시피네요! ===');
}

function myOwnRecipe4(callback) {
  console.log('==== 나만의 레시피 ====');
  console.log('# 아래에 당신의 레시피를 알려주세요.');
  callback();
  console.log('==== 멋진 레시피네요! =====');
}

myOwnRecipe4(() => {
  console.log('1. 물을 부으세여');
  let a = 100;
  console.log('2. 소스를 부으세요 : ', a, 'ml만큼');
});