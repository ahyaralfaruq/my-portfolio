

var i = 0;

$('.waypoints').waypoint(function(direction){
	if (direction === "down" && !$(this.element).hasClass('animate__animated') ) {
		i++;
		$(this.element).addClass('active');

		setTimeout(function(){
			$('body .waypoints.active').each(function(k){
				var element = $(this);
				setTimeout( function () {
					var effect = element.data('effect');
					// class dibawah berhubungan dengan animate.css
					if ( effect === 'fadeIn') {
						element.addClass('animate__fadeIn animate__animated animate__slow');
					} else if ( effect === 'fadeInLeft') {
						element.addClass('animate__fadeInLeft animate__animated animate__slow');
					} else if ( effect === 'fadeInRight') {
						element.addClass('animate__fadeInRight animate__animated animate__slow');
					} else if ( effect === 'fadeInDown') {
						element.addClass('animate__fadeInDown animate__animated animate__slow');
					} else {
						element.addClass('animate__fadeInUp animate__animated animate__slow');
					}
					element.removeClass('active');
				},  k * 200, 'easeInOutExpo' );
			});
		}, 100);
	}
}, {
	offset: '85%'
})

document.addEventListener("DOMContentLoaded", function() {
	function typewriterDescription() {
		const wrapper = document.querySelector(".typewriter-wrapper")
		const el = document.querySelector(".typewriter")

		const ms = 20
		
		function createElement(isDone = false) {
			let cel = document.createElement("span")
			cel.setAttribute("class", "cursor")
			cel.innerText = "|"

			if(isDone) {
				const getSpan = wrapper.querySelector(".cursor")
				wrapper.removeChild(getSpan)
			} else {
				wrapper.appendChild(cel)
			}
		}

		function delay(ms) {
			return new Promise(resolve => setTimeout(resolve, ms))
		}

		async function typingText() {
			const valEl = el.innerHTML

			createElement()
			for(let i = 0; i < valEl.length - 1; i++) {
				el.textContent = valEl.substring(0, i)
				await delay(ms)
			}
			createElement(true)
		}
		typingText()
	}

	function typewriterWorker() {
		const el = document.querySelector(".typewriter-v2")

		let ms = 100
		let currentIndex = 0
		const phrases = ["Front-End Developer","Back-End Developer","Full-Stack Developer", "Web Developer"]
		
		function delay(ms) {
			return new Promise(resolve => setTimeout(resolve, ms))
		}
		
		async function typingText() {
			while(true) {
				let currentPhrases = phrases[currentIndex]
				
				for(let i = 0; i <= currentPhrases.length; i++) {
					el.textContent = currentPhrases.substring(0, i + 1)
					await delay(ms)
				}
				await delay(ms * 10)
				
				for(let i = currentPhrases.length; i >= 0; i--) {
					el.textContent = currentPhrases.substring(0, i - 1)
					await delay(ms)
				}
				await delay(ms * 2)
				
				if(currentIndex === phrases.length - 1) {
					currentIndex = 0
				} else {
					currentIndex++
				}
			}
		}

		typingText()
	}

	function toggleMenu() {
		const getButtonMenu = document.querySelector(".button-burger-menu")
		// const getParentTargetCollapse = document.querySelector(".collapse")
		const getTargetCollapse = document.querySelector(".menu-collapse")
		let isOpen = false

		getButtonMenu.addEventListener("click", () => {
			if(isOpen) {
				getButtonMenu.classList.add("collapsed")
				getTargetCollapse.classList.remove("show")
				isOpen = false
			} else {
				getButtonMenu.classList.remove("collapsed")
				getTargetCollapse.classList.add("show")
				isOpen = true
			}
		})
	}

	function clickSeeMoreDescription() {
		const desc = document.querySelectorAll(".hide-description")
		const btns = document.querySelectorAll(".button-description")
		
		btns.forEach(function(btn, i){
			btn.addEventListener("click",function() {
				if(desc[i].classList.contains("show")) {
					desc[i].classList.remove("show")
					btn.textContent = "More"
				} else {
					desc[i].classList.add("show")
					btn.textContent = "Close"
				}
			})
		})
	}

	function SliderCards() {
		const getWrapper = document.querySelector(".slider-wrapper")
		const getItems = document.querySelectorAll(".slider-items")
		const getNavButton = document.querySelector(".slider-navigation")
		const prevBtn = document.querySelector(".slider-navigation > .prev")
		const nextBtn = document.querySelector(".slider-navigation > .next")

		const perItem = (document.body.clientWidth || window.innerWidth ) >= 768 ? 3 : 1
		const width = perItem * 100
		let currentIndex = 0

		if(getItems.length <= perItem) {
			getNavButton.classList.remove("active")
		} else {
			getNavButton.classList.add("active")
		}

		getItems.forEach(function(item) {
			item.style.transform = `translateX(-${width * currentIndex}%)`
		})

		function slideTo(index) {
			getWrapper.classList.add("slider-moved")
			setTimeout(function(){
				getWrapper.classList.remove("slider-moved")
			}, 750)

			getItems.forEach(function(item) {
				item.style.transform = `translateX(-${width * index}%)`
			})
			isTransition = true
			currentIndex = index

		}

		function next() {
			if(currentIndex === Math.ceil(getItems.length / perItem) - 1) return
			const newIndex = currentIndex + 1
			slideTo(newIndex)
		}

		function prev() {
			if(currentIndex === 0) return
			const newIndex = currentIndex - 1
			slideTo(newIndex)
		}

		nextBtn.addEventListener("click", next)
		prevBtn.addEventListener("click", prev)
	}

	function snowingEffect() {
		const test = document.querySelector(".snowing-wrapper")
		let snowmax = 50
		let snowcolor = ["#aaaacc","#ddddFF","#ccccDD"]
		let snowtype = ["Arial Black","Arial Narrow","Times","Comic Sans MS"]
		let snowletter = "*"
		let sinkspeed = 0.6
		let snowmaxsize = 22
		let snowminsize = 8
		let snowingzone = 1
		let snow = []
		let marginbottom
		let marginright
		let timer
		let i_snow = 0
		let x_mv = []
		let crds = []
		let lftrght = []
		const browserinfos = navigator.userAgent 
		// const ie5 = document.all&&document.getElementById&&!browserinfos.match(/Opera/)
		// const ns6 = document.getElementById&&!document.all
		// const opera = browserinfos.match(/Opera/)  
		// const browserok = ie5||ns6||opera
		const ie5 = document.all&&test&&!browserinfos.match(/Opera/)
		const ns6 = test&&!document.all
		const opera = browserinfos.match(/Opera/)  
		const browserok = ie5||ns6||opera

		function randommaker(range) {        
			const rand = Math.floor(range*Math.random())
			return rand
		}
		
		function movesnow() {
			for(let i = 0; i <= snowmax; i++) {
				crds[i] += x_mv[i]
				snow[i].posy += snow[i].sink
				snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i])
				snow[i].style.top = snow[i].posy
					
				if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) >(marginright - 3 * lftrght[i])){
					if (snowingzone == 1) snow[i].posx = randommaker(marginright - snow[i].size)
					if (snowingzone == 2) snow[i].posx = randommaker(marginright / 2-snow[i].size)
					if (snowingzone == 3) snow[i].posx = randommaker(marginright / 2-snow[i].size) + marginright / 4
					if (snowingzone == 4) snow[i].posx = randommaker(marginright / 2-snow[i].size) + marginright / 2
					snow[i].posy = 0
				}
			}
			timer = setTimeout(movesnow, 30)
		}

		function initsnow() {
			if (ie5 || opera) {
				marginbottom = document.body.clientHeight
				marginright = document.body.clientWidth
			} else if (ns6) {
				marginbottom = window.innerHeight
				marginright = window.innerWidth
			}
			
			let snowsizerange = snowmaxsize-snowminsize
			for(let i = 0; i <= snowmax; i++) {
				crds[i] = 0                    
				lftrght[i] = Math.random() * 15
				x_mv[i] = 0.03 + Math.random() / 10
				snow[i] = document.getElementById("s" + i)
				snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)]
				snow[i].size = randommaker(snowsizerange) + snowminsize
				snow[i].style.fontSize = snow[i].size
				snow[i].style.color = snowcolor[randommaker(snowcolor.length)]
				snow[i].sink = sinkspeed * snow[i].size / 5

				if (snowingzone == 1) snow[i].posx = randommaker(marginright-snow[i].size)
				if (snowingzone == 2) snow[i].posx = randommaker(marginright / 2 - snow[i].size)
				if (snowingzone == 3) snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4
				if (snowingzone == 4) snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2

				snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size)
				snow[i].style.left = snow[i].posx
				snow[i].style.top = snow[i].posy
			}
			movesnow()
		}


		for(let i = 0; i <= snowmax; i++) {
			document.write(`<span id="s${i}" style="position: absolute; top: -${snowmaxsize}">${snowletter}</span>`)
		}

		if (browserok) {
			window.onload=initsnow
		}
	}

	function modalProject() {
		const modals = document.querySelectorAll('[data-modals="myModal"]')
		const modalContainer = document.querySelector('[data-modals="modal-container"]')
		const modalClose = document.querySelector('[data-modals="modal-close"]')
		const modalImagesWrapper = document.querySelector('[data-modals="modal-images-wrapper"]')
		const modalTitle = document.querySelector('[data-modals="modal-title"]')
		const modalDate = document.querySelector('[data-modals="modal-date"]')
		const modalDesc = document.querySelector('[data-modals="modal-desc"]')
		const modalLink = document.querySelector('[data-modals="modal-link"]')
		const modalBackdrop = document.querySelector('[data-modals="modal-backdrop"]')
		const body = document.body

		const __data = [
			{
				images: [
					"img/projects/project-jne-desktop.png",
					"img/projects/project-jne-desktop.png",
					"img/projects/project-jne-desktop.png"
				],
				projectTitle: "JNE Learnfest",
				date: "Februari, 2023",
				desc: `
					Membuat website wedding invitation menggunakan html, css, javascript dengan sedikit tambahan
					module bootstrap sebagai css nya dan jquery sebagai javascriptnya untuk menghandle feature yang
					dibutuhkan.
				`,
				repo: "",
				live: "",
			},
			{
				images: ["img/projects/fadin.png"],
				projectTitle: "Fadin Wedding",
				date: "Juli, 2023",
				desc: `
					Membuat website wedding invitation menggunakan html, css, javascript dengan sedikit tambahan
					module bootstrap sebagai css nya dan jquery sebagai javascriptnya untuk menghandle feature yang
					dibutuhkan.
				`,
				repo: "https://github.com/ahyaralfaruq/hajun-wedding-project",
				live: "https://ahyaralfaruq.github.io/hajun-wedding-project",
			},
		]

		// handle close modal (bermasalah)
		modalClose.addEventListener('click', function() {
			body.classList.remove("modal-hidden")
			body.style.paddingRight = ""
			modalContainer.classList.remove("active")
			modalBackdrop.classList.remove("active")

			setTimeout(function() {
				modalContainer.style.display = "none"
				modalContainer.style.paddingRight = ""
				modalBackdrop.style.display = "none"
			}, 200)

			modalImagesWrapper.innerHTML = ``
			modalTitle.innerText = ""
			modalDate.innerText = ""
			modalDesc.innerText = ""
			modalLink.innerHTML = ``
		})
		
		modals.forEach(function(modal, index) {
			modal.addEventListener('click', function() {
				setTimeout(function() {
					modalContainer.classList.add("active")
					modalBackdrop.classList.add("active")
					body.classList.add("modal-hidden")
					body.style.paddingRight = "17px"
				}, 200)

				modalContainer.style.display = "block"
				modalContainer.style.paddingRight = "17px"
				modalBackdrop.style.display = "block"

				__data[index].images.forEach(function(data) {
					modalImagesWrapper.innerHTML += `
					<div class="${__data[index].images.length === 3 ? ' col-lg-4 col-md-4' : __data[index].images.length === 2 ? ' col-lg-6 col-md-6' : ' col-lg-6 offset-lg-3 col-md-4 offset-md-3'} col-sm-12 col-12 mb-3">
						<div class="aspect-ratio-16-9 overflow-hidden">
							<img src="${data}" alt="gambar" class="w-100 h-100">
						</div>
					</div>
					`
				})
				modalTitle.innerText = __data[index].projectTitle
				modalDate.innerText = __data[index].date
				modalDesc.innerText = __data[index].desc
				modalLink.innerHTML = `
				${__data[index].repo !== "" ? `<a href="${__data[index].repo}" target="_blank" class="d-block cursor-pointer mb-2">Repo</a>` : ''}
				${__data[index].live !== "" ? `<a href="${__data[index].live}" target="_blank" class="d-block cursor-pointer mb-2">Live</a>` : ''}
				`
			})
		})

	}

	// function waypointByFunction() {

	// 	function waypointFunction(classes, direction = "down", callback, offset) {
			
	// 	}
	// }

	typewriterWorker()
	typewriterDescription()
	toggleMenu()
	SliderCards()
	// snowingEffect()
	modalProject()
})