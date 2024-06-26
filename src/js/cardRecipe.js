const card = () => {
	return `<div class="w-72 bg-white shadow-lg rounded-md cursor-pointer hover:shadow-2xl transition-all">

			<img
				src="https://images.pexels.com/photos/12557543/pexels-photo-12557543.jpeg"
				class="w-full rounded-t-md h-44" />


			<div class="m-5">

				<div class="flex justify-between">
					<h2
						class="font-medium text-gris-sazon">
						Pasta a la carbonara
					</h2>



					<img
						src="../resources/star.svg"
						alt=""
						class="w-5 cursor-pointer" />
				</div>

				<div
					class="flex justify-between items-center mb-1 mt-1">
					<div
						class="flex gap-1 text-gray-400">
						<img
							class="w-4"
							src="../resources/clock.svg"
							alt="" />
						<span
							class="text-[11px]"
							>16/02/2024</span
						>
					</div>

					<div
						class="flex gap-1 text-gray-400 cursor-pointer hover:opacity-80">
						<img
							class="w-4"
							src="../resources/comment.svg"
							alt="" />
						<span
							class="text-[11px]"
							>5
							comentarios</span
						>
					</div>
				</div>

		
				<div class="h-28 overflow-hidden py-2">
		
					<p
						class="overflow-hidden text-[12px] text-gris-sazon">
						Lorem, ipsum dolor
						sit amet consectetur
						adipisicing elit.
						Doloribus doloremque
						quisquam ipsa.
						Deserunt, atque
						omnis maiores ut,
						voluptates veniam
						sequi magnam nisi
						saepe cumque neque
						praesentium labore
						Lorem ipsum dolor
					
					
					</p>
				</div>
				<a 	href="/src/components/Recipe_view.html">
						<button
				
					class="bg-gray-100 p-3 mt-4 text-negro-sazon w-full hover:bg-amarillo-sazon hover:font-medium transition-colors text-xs uppercase rounded-sm">
					continuar leyendo
				</button>
				</>


		
			</div>
		</div>`;
};

const cards = document.getElementById("cards");

let htmlCards = ``;

for (let index = 0; index < 13; index++) {
	htmlCards += card();
}

cards.innerHTML = htmlCards;
