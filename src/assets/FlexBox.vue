<template>
<body>
	<div class="wrapper">
		<div class="body">
			<div class="greet">
				<div class="container">
					<div class="greet__row">
						<div class="greet__body">
							<div class="greet__title">Привет Друг!</div>
							<ul class="greet__menu">
								<li>У тебя все получится!</li>
								<li>Никогда не сдавайся!</li>
								<li>Сегодня ты уже знаешь больше чем вчера!</li>
								<li>Спасибо тебе за поддержку!</li>
							</ul>
						</div>
						<div class="greet__img">
							<img class="scape" :src="require ('@/img/Landscape.jpg')" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="content">
			<div class="most">
				<div class="container">
					<div class="most__row">
						<div class="most__img">
							<img :src="require ('@/img/image_2.jpg')" />
						</div>
						<div class="most__body">
							<div class="most__title title">
								What is the FlexBox?
							</div>
							<div class="most__text">
								<p>Flexbox - это целый модуль, содержащий в себе набор свойств и их значений как для родителя flex-контейнера так и для его дочерних элементов flex-элементов.</p>

								<p>Основным преимуществом гибкой FLEX разметки является возможность изменять ширину/высоту пространство вокруг и порядок flex-элементов, для того чтобы наилучшим образом заполнить доступное пространство flex-контейнера</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="main">
				<div class="container">
					<div class="main__title title">Колонки с flex-контейнерами</div>
					<div class="main__row">
						<div class="main__body">

							<div class="main__item item">
								<div class="item__row">
									<div class="item__image">
										<img :src="require ('@/img/image_3.jpg')" />
									</div>
									<div class="item__body">
										<div class="item__title">The description for the image</div>
										<div class="item__text">Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.</div>
									</div>
								</div>
							</div>
						</div>
						<div class="main__body">

							<div class="main__item item">
								<div class="item__row">
									<div class="item__image">
										<img :src="require ('@/img/image_3.jpg')" />
									</div>
									<div class="item__body">
										<div class="item__title">The description for the image</div>
										<div class="item__text">Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.</div>
									</div>
								</div>
							</div>
						</div>
						<div class="main__body">

							<div class="main__item item">
								<div class="item__row">
									<div class="item__image">
										<img :src="require ('@/img/image_3.jpg')" />
									</div>
									<div class="item__body">
										<div class="item__title">The description for the image</div>
										<div class="item__text">Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.</div>
									</div>
								</div>
							</div>
						</div>
						<div class="main__body">

							<div class="main__item item">
								<div class="item__row">
									<div class="item__image">
										<img :src="require ('@/img/image_3.jpg')" />
									</div>
									<div class="item__body">
										<div class="item__title">The description for the image</div>
										<div class="item__text">Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>		

			<div class="cards">
				<div class="container">
					<div class="cards__title title">Вертикальное выравнивание</div>
					<div class="cards__body">
						<div class="cards__row">
<!-- First Card -->
							<div class="cards__column">
								<div class="cards__item">
									<div class="cards__subtitle">
									  Link
								  </div>
									<div class="cards__label">
										Just some comments
									</div>
									<div class="cards__text">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur fugit vel, eligendi illum, placeat quo vero reiciendis consectetur.</p>
									</div>
									<div class="cards__btn">
										<button>Click</button>
									</div>
								</div>
							</div>
<!-- Second Card -->
						<div class="cards__column">
								<div class="cards__item">
									<div class="cards__subtitle">
									  Link
								  </div>
									<div class="cards__label">
										Just some comments
									</div>
									<div class="cards__text">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur fugit vel, eligendi illum, placeat quo vero reiciendis consectetur voluptatibus atque et itaque, hic, deleniti. Sunt commodi tempora voluptatum dolorum.
										</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur fugit vel, eligendi illum, placeat quo vero reiciendis consectetur tempora voluptatum dolorum.
										</p>
									</div>
									<div class="cards__btn">
										<button>Click</button>
									</div>
								</div>
							</div>
<!-- Third Card -->
							<div class="cards__column">
								<div class="cards__item">
									<div class="cards__subtitle">
									  Link
								  </div>
									<div class="cards__label">
										Just some comments
									</div>
									<div class="cards__text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
									</div>
									<div class="cards__btn">
										<button>Click</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="footer">
			<div class="container">
				<div class="footer__row">
					<div class="footer__text">Since now</div>
				</div>
			</div>
		</div>		
	</div>

</body>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
@import "../Flex_Box/Flex-Practice.scss";
// @import "../Flex_Box/Flex-Practice.scss";
	.scape {
		width: 700px;
		margin: 0;
		padding: 0;
}
button {
	padding: 5px;
}
</style>