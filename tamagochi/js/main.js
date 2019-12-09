let startBtn = document.querySelector("#startBtn"),
	foodBtn = document.querySelector("#foodBtn"),
	cleanBtn = document.querySelector("#cleanBtn"),
	happinesBtn = document.querySelector("#happinesBtn"),
	healthBtn = document.querySelector("#healthBtn"),
	socializationBtn = document.querySelector("#socializationBtn"),
	goToWorkBtn = document.querySelector("#goToWorkBtn"),
	buyFoodBtn = document.querySelector("#buyFoodBtn"),
	makeBusinessBtn = document.querySelector("#makeBusinessBtn");
let foodValue = document.querySelector("#foodValue"),
	cleanValue = document.querySelector("#cleanValue"),
	happinesValue = document.querySelector("#happinesValue"),
	healthValue = document.querySelector("#healthValue"),
	socializationValue = document.querySelector("#socializationValue");
	moneyValue = document.querySelector("#moneyValue");
let curentTamag = {};

class Randomizer {
	static getRandom(min, max) {
		return Math.fround(min - Math.random() * (max - min));
	}
}
class Timer {
	constructor() {
		this.timerInterval;
		this.minutes;
		this.seconds; 
	}
	startTimer() {
		this.minutes = 0;
		this.seconds = 0;
		this.timerInterval = setInterval(() => {
			if(++this.seconds > 59) {
				this.minutes += 1;
				this.seconds = 0;
			}
		}, 1000);
	}
	clearTimer() {
		clearInterval(this.timerInterval);
	}
}

class CreateTamagochi {
	constructor(type) {
		let food = this.Randomizer();
		let clean = this.Randomizer();
		let happines = this.Randomizer();
		let health = this.Randomizer();
		let socialization = this.Randomizer();
		let money = this.Randomizer();
		let tamagochi = new Tamagochi(type, food, clean, happines, health, socialization, money);
		return tamagochi;
	}
}

class Tamagochi {
    constructor(type, food, clean, happines, health, socialization, money) {
        this.type = type;
        this.food = food;
        this.clean = clean;
		this.happines = happines;
		this.health = health;
		this.socialization = socialization;
		this.money = money;
		this.decreasePoints;
		this.decreaseAfter;
	}
    get type() {
        return this._type;
	}
    set type (value) {
        this._type = value;
	}
	get food() {
        return this._food;
	}
	set food(value) {
    	this._food = value;
	}
	get clean() {
		return this._clean;
	}
	set clean(value) {
    	this._value = value;
	}
	get happines() {
    	return this._happines;
	}
	set happines(value) {
    	this._happines = value;
	}
	get health() {
		return this._health;
	}
	set health(value) {
		this._health = value;
	}
	get socialization() {
		return this._socialization;
	}
	set socialization(value) {
		this._socialization = value;
	}
	get money() {
		return this._money;
	}
	set money(value) {
		this._money = value;
	}
}

class Main {
	statsDecreaser() {
		this.decreaserInterval = setInterval(() => {
			this.curentTamag.food -= this.curentTamag.food;
			this.curentTamag.clean -= this.createdTamag.clean;
			this.curentTamag.happines -= this.curentTamag.happines;
			this.curentTamag.health -= this.curentTamag.health;
			this.curentTamag.socialization -= this.curentTamag.socialization; 
		}, this.curentTamag.decreaseAfter * 1000);
	}
	tamagValue(food, clean, happines, health, socialization, money) {
		foodValue.innerHTML = food;
		cleanValue.innerHTML = clean;
		happinesValue.innerHTML = happines;
		health.value.innerHTML = health;
		socialization.value.innerHTML = socialization;
		money.value.innerHTML = money;
	}
	checkTamagValue() {
		if(
			curentTamag.food <= 0 ||
			curentTamag.clean <= 0 ||
			curentTamag.happines <= 0 ||
			curentTamag.health <= 0 ||
			curentTamag.socialization <= 0 ||
			curentTamag.money <= 0) {
			alert("GG");
			startBtn();
		}
	}
	startGame() {
		startBtn.addEventListener("ckick", function() {
			let typeOfTamag = document.querySelector("#typeValue").value;
			let createNewTamag = new Tamagochi();
			let createdTamag = createNewTamag.CreateTamagochi(typeOfTamag);
			curentTamag = createdTamag;
			tamagValue(curentTamag.health, curentTamag.socialization, curentTamag.money, curentTamag.food,
				curentTamag.happines, curentTamag.clean);
			checkTamagValue();
		});
	}
	feedTamag() {
		foodBtn.addEventListener("click", function() {
			curentTamag.food += 30;
			if(curentTamag.food >= 100) {
				curentTamag.food == 100;
			}
			curentTamag.clean -= 20;
			tamagValue(curentTamag.health, curentTamag.socialization, curentTamag.money, curentTamag.food,
				curentTamag.happines, curentTamag.clean);
			checkTamagValue();
		});
	}
	washTamag() {
		cleanBtn.addEventListener("click", function() {
			curentTamag.clean += 40;
			if(curentTamag.clean >= 100) {
				curentTamag.clean == 100;
			}
			curentTamag.happines -= 10;
			tamagValue(curentTamag.health, curentTamag.socialization, curentTamag.money, curentTamag.food,
				curentTamag.happines, curentTamag.clean);
			checkTamagValue();
		});
	}
	petTamag() {
		happinesBtn.addEventListener("click", function(){
			curentTamag.happines += 15;
			if(curentTamag.happines >= 100) {
				curentTamag.happines == 100;
			}
			curentTamag.food -= 10;
			tamagValue(curentTamag.health, curentTamag.socialization, curentTamag.money, curentTamag.food,
				curentTamag.happines, curentTamag.clean);
			checkTamagValue();
		});
	}
	visitDoctor() {
		healthBtn.addEventListener("click", function() {
			curentTamag.health += 30;
			if(curentTamag.health >= 100) {
				curentTamag.health == 100;
			}
			curentTamag.money -= 20;
			tamagValue(curentTamag.health, curentTamag.socialization, curentTamag.money, curentTamag.food,
				curentTamag.happines, curentTamag.clean);
			checkTamagValue();
		});
	}
	visitBar() {
		socializationBtn.addEventListener("click", function() {
			curentTamag.socialization += 40;
			curentTamag.food += 10;
			if(curentTamag.food >= 100) {
				curentTamag.food == 100;
			} else {
				if(curentTamag.socialization >= 100) {
					curentTamag.socialization == 100;
				}
			}
			curentTamag.money -= 20;
			curentTamag.health -= 10;
			tamagValue(curentTamag.health, curentTamag.socialization, curentTamag.money, curentTamag.food,
				curentTamag.happines, curentTamag.clean);
			checkTamagValue();
		});
	}
	goToWork() {
		goToWorkBtn.addEventListener("click", function(){
			curentTamag.money += 50;
			if(curentTamag.money >= 100) {
				curentTamag.money == 100;
			}
			curentTamag.food -= 10;
			curentTamag.health -= 10;
			curentTamag.socialization -= 20;
			tamagValue(curentTamag.health, curentTamag.socialization, curentTamag.money, curentTamag.food,
				curentTamag.happines, curentTamag.clean);
			checkTamagValue();
		});
	}
	buyFood() {
		buyFoodBtn.addEventListener("click", function() {
			curentTamag.food += 20;
			if(curentTamag.mone >= 100) {
				curentTamag.food == 100;
			}
			curentTamag.mone -= 20;
			tamagValue(curentTamag.health, curentTamag.socialization, curentTamag.money, curentTamag.food,
				curentTamag.happines, curentTamag.clean);
			checkTamagValue();
		});
	}
	makeBusiness() {
		// will be added
	}
	hepler() {
		this.helpInterval = setInterval(() => {
			let stats = ["food", "clean", "happinse", "health", "socialization", "money"];
			this.curentTamag[stats(0, stats.length)] += Randomizer(10, 50);
		}, 60 * 1000);
	}
}