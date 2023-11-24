var url_temp = '';

var documentTitle = document.title + " ";

(function titleMarquee() {
  document.title = documentTitle = documentTitle.substring(1) + documentTitle.substring(0, 1);
  setTimeout(titleMarquee, 500);
})();

window.onload = function () {
	var windowWidth = window.innerWidth;
	setTimeout(() => {
		shinyProfile();
	}, 1000);
	// document.querySelector('#one').classList.remove('hide');
	if (windowWidth > 980) {
		window.scrollTo(0, 0);
	}
};

function shinyProfile() {
	document.querySelector('#border-avatar').classList.add('is-active');
}

function goTop() {
	window.scrollTo(0, 0);
}

function abrirMenu() {
	var windowWidth = window.innerWidth;
	// console.log('abriu menu');
	document.querySelector('#myMenu').classList.toggle('hide');
	document.querySelector('#menuOn').classList.toggle('hide');
	document.querySelector('#menuOff').classList.toggle('hide');
	if (windowWidth < 980) {
		document.querySelector('#body-page').classList.add('page-overflow');
	}
};

function viewArticle(opt) {
	var windowWidth = window.innerWidth;
	switch (opt) {
		case 'skillsList':
			document.querySelector('#skillsList').classList.remove('hide');
			document.querySelector('#welcome').classList.add('hide');
			document.querySelector('#selectedJob').classList.add('hide');
			document.querySelector('#personalJobs').classList.add('hide');
			document.querySelector('#personalJobs').classList.add('hide');
			break;

		case 'recentJobs':
			document.querySelector('#recentJobs').classList.remove('hide');
			document.querySelector('#welcome').classList.add('hide');
			document.querySelector('#selectedJob').classList.add('hide');
			document.querySelector('#skillsList').classList.add('hide');
			document.querySelector('#personalJobs').classList.add('hide');
			break;

		case 'personalJobs':
			document.querySelector('#personalJobs').classList.remove('hide');
			document.querySelector('#welcome').classList.add('hide');
			document.querySelector('#selectedJob').classList.add('hide');
			document.querySelector('#skillsList').classList.add('hide');
			document.querySelector('#recentJobs').classList.add('hide');
			break;

		case 'home':
			document.querySelector('#welcome').classList.remove('hide');
			document.querySelector('#selectedJob').classList.add('hide');
			document.querySelector('#skillsList').classList.add('hide');
			document.querySelector('#recentJobs').classList.add('hide');
			document.querySelector('#personalJobs').classList.add('hide');
			break;

		default:
			break;
	}
	fecharMenu();
	if (windowWidth < 980) {
		setTimeout(() => {
			window.scrollTo(0, 380);
		}, 250);
	} else {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 250);
	}
};


function fecharMenu() {
	var windowWidth = window.innerWidth;
	// console.log('abriu menu');
	document.querySelector('#myMenu').classList.add('hide');
	document.querySelector('#menuOn').classList.remove('hide');
	document.querySelector('#menuOff').classList.add('hide');
	if (windowWidth < 980 || windowWidth > 1024) {
		document.getElementById('body-page').classList.remove('page-overflow');
	}
};

window.addEventListener("scroll", scrollMenuCtrl);

function scrollMenuCtrl() {
	const y_scroll = window.scrollY;
	// console.log(y_scroll);
	if (y_scroll > 100) {
		document.querySelector('#button-menu-animation').classList.add('scroll-menu-animation');
		document.querySelector('#btnGoTop').classList.remove('hide');
	} else {
		document.querySelector('#button-menu-animation').classList.remove('scroll-menu-animation');
		document.querySelector('#btnGoTop').classList.add('hide');
	}
}

function closeModal() {
	document.getElementById('jobFrame').src = 'about:blank';
	document.querySelector('.modal-cover').classList.add("hide");
	document.querySelector('.modal-active').classList.add("hide");
	document.querySelector('#body-page').classList.remove('page-overflow');
}

function openModal(event) {
	// var iframe = document.querySelector(".full-size-iframe");
	// document.querySelector('#body-page').classList.add('page-overflow');
	// document.querySelector('.modal-active').classList.remove("hide");
	// document.querySelector('.modal-cover').classList.remove("hide");
	// switch (event) {
	// 	case 01:
	// 		document.querySelector("#modal-title").innerHTML = '';
	// 	break;

	// 	case 02:
	// 		document.querySelector("#modal-title").innerHTML = '';
	// 	break;

	// 	case 03:
	// 		document.querySelector("#modal-title").innerHTML = 'Player de Musica (JS)';
	// 	break;

	// 	case 04:
	// 		document.querySelector("#modal-title").innerHTML = 'Formatador de Código';
	// 	break;

	// 	case 05:
	// 		document.querySelector("#modal-title").innerHTML = 'Formatador de Código';
	// 	break;

	// 	case 06:
	// 		document.querySelector("#modal-title").innerHTML = 'Formatador de Código';
	// 	break;
	// }
}

function openJob(selJob) {
	let job = myJobs.find(myJobs => myJobs.id === selJob);
	// console.log(job);
	document.querySelector("#job-title").innerHTML = job.title;
	document.querySelector("#job-text").innerHTML = job.description;
	document.querySelector("#job-img-1").src = 'images/thumbs/' + job.image1;

	url_temp = job.link;

	document.querySelector('#selectedJob').classList.remove('hide');
	document.querySelector('#recentJobs').classList.add('hide');
}

function backJobs() {
	document.querySelector('#selectedJob').classList.add('hide');
	document.querySelector('#recentJobs').classList.remove('hide');
}

function openGit() {
	window.open(url_temp, '_blank');
}