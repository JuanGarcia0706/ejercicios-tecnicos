class Reloj {
  constructor() {
    const date = new Date();
    this.h = date.getHours();
    this.m = date.getMinutes();
    this.s = date.getSeconds();
  }

  encender() {
    const date = [this.h, this.m, this.s];
    console.log(date.join(':'));
    setInterval(() => {
      date[2]++;
      if (date[2] >= 60) {
        date[1]++;
        date[2] = 0;
      }

      if (date[1] >= 60) {
        date[0]++;
        date[1] = 0;
        date[2] = 0;
      }

      if (date[0] >= 24) {
        date[0] = 0;
      }

      console.log(date.join(':'));
    }, 1000);
  }
}

const reloj = new Reloj();
reloj.encender();
