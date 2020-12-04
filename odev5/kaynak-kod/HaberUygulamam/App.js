import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Haber from './Haber.js';

const App = () => {
  return (
    
    <SafeAreaView>
   
      <ScrollView>
        <Haber type='Siyaset' title="Eski Bakan Nevzat Ayaz son yolculuğuna uğurlandı" description="Eski Milli Savunma ve Milli Eğitim Bakanı Nevzat Ayaz Zincirlikuyu Cami'inde kılınan cenaze namazının ardından toprağa verildi." />
        <Haber type='Siyaset' title="Havaalanlarımızın sayısını 26'dan 56'ya çıkardık" description="Ulaştırma ve Altyapı Bakanı Adil Karaismailoğlu Hava alanlarımızın sayısını 26'dan 56'ya çıkararak önemli bir yol kat ettik dedi." />
        <Haber type='Siyaset' title="Bakan Soylu'dan şehit polis memurunun ailesine başsağlığı" description="İçişleri Bakanı Süleyman Soylu, Kutlu ve kutsal bir görevi üstlenen arkadaşlarımız hiçbir hesabın içerisinde olmadan millet, vatan ve namus kavramıyla bu büyük mücadeleyi gerçekleştiriyorlar dedi."/>
        <Haber type='Spor' title="Trabzonspor'da Anders Trondsen bireysel çalışmalara başladı." description="Trabzonspor'da 24 Eylül'de menisküs ameliyatı olan Anders Trondsen yaklaşık 2 buçuk ay sonra bireysel çalışmalara başladı.." />
        <Haber type='Spor' title="Ender Bilgin: Marcao'nun 20 milyon euro civarına satılması zor | Son dakika Galatasaray haberleri." description= "A Spor'da yayınlanan Spor Medyası programında Galatasaray transfer gündemini değerlendiren Ender Bilgin, Marcao hakkında flaş bir yorumda bulundu.." />
        <Haber type='Spor' title="Taylan Antalyalı nazara geldi: Sakatlık paniği" description="Galatasaray'da Taylan Antalyalı sakatlandı. Sol ayak bileği burkulan 25 yaşındaki Taylan'ın durumu bugün yapılacak kontrollerden sonra netleşecek. Bölgesinde alternatifsiz olan Taylan'ın sakatlığı Galatasaray'ı korkutuyor." />
        <Haber type='Ekonomi' title="Ocakta maaş zammı ne olacak?" description="Türkiye İstatistik Kurumu’nun (TÜİK) açıkladığı kasım ayı enflasyon rakamları beklentilerin üzerinde gerçekleşti. Merkez Bankası’nın yıl sonu enflasyon tahmininin tutmayacağı büyük ölçüde kesinleşti." />
        <Haber type='Ekonomi' title="Dünya gıda fiyatları endeksi 6 yılın zirvesinde" description="Kasım ayında dünya gıda fiyatları endeksi son 6 yılın en yüksek seviyesine ulaştı. Bitkisel yağ fiyatları ise palm yağı fiyatlarındaki yükselişin etkisiyle aylık yüzde 14.5 artışla endeksin genelindeki yükselişe öncülük etti"/>
        <Haber type='Ekonomi' title="Vergi borcu yapılandırma nasıl yapılır? İşte vergi borcu yapılandırma başvuru ekranı ve vergi borcu taksitlendirmesi" description="Vergi borcu yapılandırma kanununun kabul edilmesinin ardından borcu bulunan milyonlarca vatandaş vergi borcu yapılandırma başvurusu nasıl yapılır?" />
        <Haber type='Sağlık' title="Kan damarlarını incelten gıdalara dikkat!" description="Bazen kan damarlarınız vücut ısısı kaybını azaltmak, kan basıncını dengelemek, belirli organlara oksijen ve besin göndermek, kan veya sıvı kaybını önlemek için daralır." />
        <Haber type='Sağlık' title="Bağışıklık sistemini güçlendiren mucizevi elma-soğan çayı" description="Elma-soğan çayının üst solunum yolu enfeksiyonlarında iyileşme için oldukça etkili olduğunu söyleyen Dr. Öğr. Üyesi Tuba Kayan Tapan, elma-soğan çayının tarifini vererek bağışıklık sistemini nasıl güçlendirdiğini açıkladı." />
        <Haber type='Sağlık' title="Doğumsal kalp hastalıklarında erken tanı hayat kurtarıyor" description="alp ve Damar Cerrahisi Uzmanı Doç. Dr. Arda Özyüksel, doğumsal kalp hastalıklarında erken tanının hayat kurtardığını söyledi. Özyüksel, doğumsal kalp hastalıklarından ve tedavi yöntemlerinden bahsetti." />
        <Haber type='Magazin' title="Tarkan alışverişte! 'Ülkenin en şanslı marketi'" description="Uzun süredir Almanya'da olan Megastar Tarkan, eşi Pınar Dilek ve kızı Liya ile birlikte market alışverişine çıktı." />
        <Haber type='Magazin' title="Son dakika haberi... Pınar Altuğ'dan çok konuşulacak açıklamalar: Ben kendi evliliğimden vazgeçtim" description="Yapımcılığını BBO Yapım'ın üstlendiği 40’, Jülide Ateş'in sunumuyla, Haber Global ekranlarında 3 Aralık Perşembe akşamı televizyoncu, oyuncu Pınar Altuğ’u konuk etti." />
        <Haber type='Magazin' title="Son dakika haberi... Seren Serengil her şeyi anlattı: 5 kardeşim var ama ben tekim!" description="Youtube da Armağan Çağlayan ın sunduğu Gör Beni programına konuk olan Seren Serengil, bilinmeyenlerini anlattı. Annesi ve babasından beş kardeşi olduğunu açıklayan Serengil, travmalarım yüzünden yuva yıkan kadınlara düşmanım dedi." />
      </ScrollView>
    
  </SafeAreaView>
);
};



export default App; 
      
