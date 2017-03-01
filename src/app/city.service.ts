/**
 * Created by MT on 2017-03-01.
 */
import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable()
export class CityService {
  static getCities() {
    return [
      new City(1, 130, 'Akmenė'),
      new City(2, 130, 'Akmenės raj.'),
      new City(3, 130, 'Akmenės raj., Naujoji Akmenė'),
      new City(4, 130, 'Akmenės raj., Venta'),
      new City(5, 130, 'Akmenės raj. Viekšniai'),
      new City(6, 130, 'Alytaus raj.'),
      new City(7, 130, 'Alytaus raj., Daugai'),
      new City(8, 130, 'Alytaus raj., Simnas'),
      new City(9, 130, 'Alytus'),
      new City(10, 130, 'Anykščiai'),
      new City(11, 130, 'Anykščių raj.'),
      new City(12, 130, 'Anykščių raj., Kavarskas'),
      new City(13, 130, 'Anykščių raj., Troškūnai'),
      new City(14, 130, 'Birštonas'),
      new City(15, 130, 'Biržai'),
      new City(16, 130, 'Biržų raj.'),
      new City(17, 130, 'Biržų raj., Vabalninkas'),
      new City(18, 130, 'Druskininkai'),
      new City(19, 130, 'Ignalina'),
      new City(20, 130, 'Ignalinos raj.'),
      new City(21, 130, 'Ignalinos raj., Dūkštas'),
      new City(22, 130, 'Jonava'),
      new City(23, 130, 'Jonavos raj.'),
      new City(24, 130, 'Joniškio raj.'),
      new City(25, 130, 'Joniškio raj., Žagarė'),
      new City(26, 130, 'Joniškis'),
      new City(27, 130, 'Jurbarkas'),
      new City(28, 130, 'Jurbarko raj.'),
      new City(29, 130, 'Jurbarko raj., Smalininkai'),
      new City(30, 130, 'Kaišiadorių raj.'),
      new City(31, 130, 'Kaišiadorių raj., Žiežmariai'),
      new City(32, 130, 'Kaišiadorys'),
      new City(33, 130, 'Kaunas'),
      new City(34, 130, 'Kauno raj.'),
      new City(35, 130, 'Kauno raj., Ežerėlis'),
      new City(36, 130, 'Kauno raj., Garliava'),
      new City(37, 130, 'Kauno raj., Kačerginė'),
      new City(38, 130, 'Kauno raj., Kulautuva'),
      new City(39, 130, 'Kauno raj., Vilkija'),
      new City(40, 130, 'Kelmė'),
      new City(41, 130, 'Kelmės raj.'),
      new City(42, 130, 'Kelmės raj., Tytuvėnai'),
      new City(43, 130, 'Kelmės raj., Užventis'),
      new City(44, 130, 'Klaipėda'),
      new City(45, 130, 'Klaipėdos raj.'),
      new City(46, 130, 'Klaipėdos raj., Gargždai'),
      new City(47, 130, 'Klaipėdos raj., Priekulė'),
      new City(48, 130, 'Kretinga'),
      new City(49, 130, 'Kretingos raj.'),
      new City(50, 130, 'Kretingos raj., Salantai'),
      new City(51, 130, 'Kupiškio raj.'),
      new City(52, 130, 'Kupiškio raj., Subačius'),
      new City(53, 130, 'Kupiškis'),
      new City(54, 130, 'Kėdainiai'),
      new City(55, 130, 'Kėdainių raj.'),
      new City(56, 130, 'Lazdijai'),
      new City(57, 130, 'Lazdijų raj.'),
      new City(58, 130, 'Lazdijų raj., Veisiejai'),
      new City(59, 130, 'Marijampolė'),
      new City(60, 130, 'Marijampolės raj.'),
      new City(61, 130, 'Marijampolės raj., Kalvarija'),
      new City(62, 130, 'Marijampolės raj., Kazlų Rūda'),
      new City(63, 130, 'Mažeikiai'),
      new City(64, 130, 'Mažeikių raj.'),
      new City(65, 130, 'Mažeikių raj., Seda'),
      new City(66, 130, 'Molėtai'),
      new City(67, 130, 'Molėtų raj.'),
      new City(68, 130, 'Neringa'),
      new City(69, 130, 'Pakruojis'),
      new City(70, 130, 'Pakruojo raj.'),
      new City(71, 130, 'Pakruojo raj., Linkuva'),
      new City(72, 130, 'Palanga'),
      new City(73, 130, 'Panevėžio raj.'),
      new City(74, 130, 'Panevėžio raj. Ramygala'),
      new City(75, 130, 'Panevėžys'),
      new City(76, 130, 'Pasvalio raj.'),
      new City(77, 130, 'Pasvalio raj., Joniškėlis'),
      new City(78, 130, 'Pasvalys'),
      new City(79, 130, 'Plungė'),
      new City(80, 130, 'Plungės raj.'),
      new City(81, 130, 'Plungės raj., Rietavas'),
      new City(82, 130, 'Prienai'),
      new City(83, 130, 'Prienų raj.'),
      new City(84, 130, 'Prienų raj., Jieznas'),
      new City(85, 130, 'Radviliškio raj.'),
      new City(86, 130, 'Radviliškio raj., Tyruliai'),
      new City(87, 130, 'Radviliškio raj., Šeduva'),
      new City(88, 130, 'Radviliškis'),
      new City(89, 130, 'Raseiniai'),
      new City(90, 130, 'Raseinių raj.'),
      new City(91, 130, 'Raseinių raj., Ariogala'),
      new City(92, 130, 'Rokiškio raj.'),
      new City(93, 130, 'Rokiškio raj., Juodupė'),
      new City(94, 130, 'Rokiškio raj., Obeliai'),
      new City(95, 130, 'Rokiškio raj., Pandėlys'),
      new City(96, 130, 'Rokiškis'),
      new City(97, 130, 'Skuodas'),
      new City(98, 130, 'Skuodo raj.'),
      new City(99, 130, 'Šakiai'),
      new City(100, 130, 'Šakių raj.'),
      new City(101, 130, 'Šakių raj., Gelgaudiškis'),
      new City(102, 130, 'Šakių raj., Kudirkos Naumiestis'),
      new City(103, 130, 'Šalčininkai'),
      new City(104, 130, 'Šalčininkų raj.'),
      new City(105, 130, 'Šalčininkų raj., Baltoji Vokė'),
      new City(106, 130, 'Šalčininkų raj., Eišiškės'),
      new City(107, 130, 'Šiauliai'),
      new City(108, 130, 'Šiaulių raj.'),
      new City(109, 130, 'Šiaulių raj., Kuršėnai'),
      new City(110, 130, 'Šilalė'),
      new City(111, 130, 'Šilalės raj.'),
      new City(112, 130, 'Šilutė'),
      new City(113, 130, 'Šilutės raj.'),
      new City(114, 130, 'Šilutės raj., Pagėgiai'),
      new City(115, 130, 'Šilutės raj., Panemunė'),
      new City(116, 130, 'Širvintos'),
      new City(117, 130, 'Širvintų raj.'),
      new City(118, 130, 'Švenčionių raj.'),
      new City(119, 130, 'Švenčionių raj., Pabradė'),
      new City(120, 130, 'Švenčionių raj., Švenčionėliai'),
      new City(121, 130, 'Švenčionys'),
      new City(122, 130, 'Tauragė'),
      new City(123, 130, 'Tauragės raj.'),
      new City(124, 130, 'Tauragės raj., Skaudvilė'),
      new City(125, 130, 'Telšiai'),
      new City(126, 130, 'Telšių raj., Varniai'),
      new City(127, 130, 'Trakai'),
      new City(128, 130, 'Trakų raj.'),
      new City(129, 130, 'Trakų raj., Elektrėnai'),
      new City(130, 130, 'Trakų raj., Lentvaris'),
      new City(131, 130, 'Trakų raj., Rūdiškės'),
      new City(132, 130, 'Trakų raj., Vievis'),
      new City(133, 130, 'Ukmergė'),
      new City(134, 130, 'Ukmergės raj.'),
      new City(135, 130, 'Utena'),
      new City(136, 130, 'Utenos raj.'),
      new City(137, 130, 'Varėna'),
      new City(138, 130, 'Varėnos raj.'),
      new City(139, 130, 'Vilkaviškio raj.'),
      new City(140, 130, 'Vilkaviškio raj., Kybartai'),
      new City(141, 130, 'Vilkaviškio raj., Virbalis'),
      new City(142, 130, 'Vilkaviškis'),
      new City(143, 130, 'Vilniaus raj.'),
      new City(144, 130, 'Vilniaus raj., Nemenčinė'),
      new City(145, 130, 'Vilnius'),
      new City(146, 130, 'Visaginas'),
      new City(147, 130, 'Zarasai'),
      new City(148, 130, 'Zarasų raj.'),
      new City(149, 130, 'Zarasų raj., Dusetos'),
      new City(150, 130, 'Zarasų raj., Turmantas')
    ];
  }
}
