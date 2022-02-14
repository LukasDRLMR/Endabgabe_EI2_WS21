namespace Endabgabe {
    export class Döner extends Food {
        
        constructor() {
            super();
            this.positionPrep = new Vector(480, 80);
            this.positionDisplay = new Vector(550, 40);
            this.capacity = 10;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 40, 0, 1.2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(180, 100, 0)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "black";
            crc2.fillText("Döner", this.positionPrep.x, this.positionPrep.y + 55);
            crc2.restore();
            
            crc2.save();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "rgb(70, 70, 70)";
            crc2.translate(this.positionDisplay.x, this.positionDisplay.y);
            crc2.strokeRect(0, 0, 10, 100);
            crc2.fillRect(0, 0, 10, 100);
            crc2.fillStyle = "white";
            crc2.fillRect(0, 100, 10, -10 * this.capacity);
            crc2.restore();
        }

        public clicked(_object: number): void {
            if (this.capacity > 0) {
                super.clicked(_object);
                order.push("Döner");
            }
        }
    }
}