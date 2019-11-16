import {names, surnames} from "../storages/NamesAndSurnamesBase";
import {mails} from "../storages/EmailsBase";
import {pesels} from "../storages/PeselsBase";
import {phoneNumbers} from "../storages/PhoneNumbersBase";
import {licensePlates} from "../storages/LicensePlatesBase";
import {diseases} from "../storages/DiseasesBase";
import {streets} from "../storages/StreetsBase";
import {localities} from "../storages/LocalitiesBase";
import {postalCodes} from "../storages/PostalCodesBase";


export class ExampleDataGenerator {
    public generateText(): string {
        const texts: string[] = [];

        texts.push(this.getRandomElementFromArray(names) + ' ' + this.getRandomElementFromArray(surnames));
        const dt = new Date();
        const dateString = dt.getDate() + '-' + (dt.getMonth() + 1) + '-' +  (dt.getFullYear() - 20);
        texts.push("Pesel: " + this.getRandomElementFromArray(pesels));
        texts.push("Data urodzenia: " + dateString);
        texts.push(`Adres: ${this.getRandomElementFromArray(localities)} ul.${this.getRandomElementFromArray(streets)} 32/5 ${this.getRandomElementFromArray(postalCodes)}`);
        texts.push("Adres e-mail: " + this.getRandomElementFromArray(mails));
        texts.push("Numer telefonu: " + this.getRandomElementFromArray(phoneNumbers));
        texts.push("\n Sąd rozważył co następuje: \n");
        // here some bs

        texts.push(`W świetle zgromadzonego w sprawie materiału dowodowego wina oskarżonego i okoliczności popełnienia przez niego występku nie budzą wątpliwości. Bezsporny jest fakt, że kierowca przedmiotowego pojazdu marki Toyota o numerze rejestracyjnym ${this.getRandomElementFromArray(licensePlates)} był oskarżony o spowodowanie wypadku ze skutkiem śmiertelnym. Wynika to przede wszystkim z wyjaśnień samego oskarżonego, który od samego początku konsekwentnie, tożsamo opisywał przebieg wydarzeń z dnia ${dt.getDate() + '-' + (dt.getMonth() + 1) + '-' + (dt.getFullYear() - 1)} oraz podawał, iż to on w momencie zdarzenia kierował samochodem. Brak było podstaw by wyjaśnieniom oskarżonego w powyższym zakresie wiary nie dać. Przede wszystkim dlatego, że znajdują one potwierdzenie w zeznaniach świadków - ${this.getRandomElementFromArray(names) + ' ' + this.getRandomElementFromArray(surnames)}, ${this.getRandomElementFromArray(names) + ' ' + this.getRandomElementFromArray(surnames)}, ${this.getRandomElementFromArray(names) + ' ' + this.getRandomElementFromArray(surnames)}. Osoby te podróżowały wówczas z oskarżonym opisały przebieg wydarzeń logicznie, spójnie z przedmiotowego dnia i dlatego ich zeznania w tym zakresie są zdaniem sądu wiarygodne. Nie ulega również wątpliwości, że oskarżony ${this.getRandomElementFromArray(names) + ' ' + this.getRandomElementFromArray(surnames)} w momencie zaistnienia wypadku był trzeźwy, co potwierdzają protokół użycia urządzenia kontrolno-pomiarowego oraz protokół pobrania krwi wraz z opinią. Wymienione choroby oskarżonego: ${this.getRandomElementFromArray(diseases)}, ${this.getRandomElementFromArray(diseases)} oraz ${this.getRandomElementFromArray(diseases)} nie miały wpływu na zdolność prowadzenia pojazdu.`)
        return texts.join("\n");
    }

    private getRandomElementFromArray(array: string[]): string {
        const index = Math.floor(Math.random() * array.length);
        let item = array[index]
        if(array.length === surnames.length) {
            item = item.substr(0, 1) + item.substring(1).toLocaleLowerCase();
        }
        return item;
    }
}