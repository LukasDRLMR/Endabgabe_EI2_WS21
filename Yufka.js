"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Yufka extends Endabgabe.Food {
        constructor() {
            super();
            this.positionPrep = new Endabgabe.Vector(645, 80);
            this.positionDisplay = new Endabgabe.Vector(710, 40);
            this.capacity = 10;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 40, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(200, 150, 20)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fillText("Yufka", this.positionPrep.x, this.positionPrep.y + 55);
            Endabgabe.crc2.restore();
            Endabgabe.crc2.save();
            Endabgabe.crc2.strokeStyle = "white";
            Endabgabe.crc2.fillStyle = "rgb(70, 70, 70)";
            Endabgabe.crc2.translate(this.positionDisplay.x, this.positionDisplay.y);
            Endabgabe.crc2.strokeRect(0, 0, 10, 100);
            Endabgabe.crc2.fillRect(0, 0, 10, 100);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fillRect(0, 100, 10, -10 * this.capacity);
            Endabgabe.crc2.restore();
        }
        clicked(_object) {
            if (this.capacity > 0) {
                super.clicked(_object);
                Endabgabe.order.push("Yufka");
            }
        }
    }
    Endabgabe.Yufka = Yufka;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Yufka.js.map