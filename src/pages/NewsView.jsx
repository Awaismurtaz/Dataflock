import React, { useState } from "react";
import WomenImage from "../assets/images/women_image.png";
import HotNewsComments from "../component/HotNewsCard.jsx";
import NewsComments from "../component/TopNews.jsx";
import DownloadIcon from "../assets/images/download.svg";
import ShareIcon from "../assets/images/share.svg";
import PrintIcon from "../assets/images/print.svg";
import RelatedNews from "../assets/images/related_news.png";
import GlobalImpact from "../assets/images/global_impect.png";
import AffectedPrice from "../assets/images/affected_price.png";
import CustomTooltip from "../component/CustomTooltip.jsx";
import CustomizeArticlePanel from "../component/CustomizeArticlePanel.jsx";
import ShareDialog from "../component/ShareDialog.jsx";

const NewsView = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="main__content__box ">
        <div className="container-fluid px-0">
          <div className="row g-4">
            <div className="col-md-8">
              {/* First Card */}
              <div className="main_contennt_box">
                <div>
                  <div className="news_views_banner_image">
                    <div className="image_box">
                      <img
                        src={WomenImage}
                        alt="news"
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="action_box">
                    <span className="fw-light title_box">Quick Action</span>
                    <div className="action_button_box position-relative">
                      <button className="action_btn">
                        <img src={DownloadIcon} alt="" />
                        <span>Save</span>
                      </button>
                        <button className="action_btn" onClick={() => setOpen(!open)}>
                        <img src={ShareIcon} alt="" />
                        <span>Share</span>
                      </button>
                      <button className="action_btn">
                        <img src={PrintIcon} alt="" />
                        <span>Print</span>
                      </button>
                                          <ShareDialog open={open} />
                    </div>
                  </div>
                </div>
                <div className="content_box">
                  <div className="heading_box pb-4">
                    <h2 className="fw-semibold text-white text-center display-4 py-4">
                      Kemi Badenoch ist neue Chefin der Konservativen
                    </h2>
                    <p className="text-white">
                      Ein konservativer Premier nach dem anderen gescheitert,
                      Debakel bei der Wahl im Sommer: Die britischen Torys haben
                      schwere Zeiten hinter sich. Jetzt haben sie die
                      Parteirechte Badenoch zu ihrer neuen Chefin gewählt.
                    </p>
                  </div>
                  <div className="mini_detail_box mb-4">
                    <h4 className="text-white fw-semibold">
                      KI Zusammenfassung
                    </h4>
                    <p className="text-white fw-light mb-0">
                      Insgesamt waren sechs Bewerberinnen und Bewerber
                      angetreten. Moderate Kandidaten wie Ex-Innenminister James
                      Cleverly schieden aber bei den Abstimmungen in der
                      Fraktion aus, bevor nun die Mitglieder das letzte Wort
                      hatten. Die 44 Jahre alte Badenoch gilt wie ihr zuletzt
                      unterlegener Kontrahent, der frühere Staatssekretär für
                      Migration, Robert Jenrick, als Vertreterin des rechten
                      Parteiflügels.
                    </p>
                  </div>
                  <div className="news_detail_description_box">
                    <p className="text-white fw-ligt">
                      Kemi Badenoch soll die Konservative Partei in
                      Großbritannien nach der historischen Niederlage bei der
                      Parlamentswahl zurück in die Regierung führen. Die
                      Mitglieder wählten die ehemalige Handelsministerin zur
                      Parteichefin. Bei der entscheidenden Stichwahl erhielt sie
                      57 Prozent der Stimmen. Die Parteirechte ist damit die
                      Nachfolgerin von Ex-Premierminister 
                        <CustomTooltip>Rishi Sunak.</CustomTooltip>
                    </p>
                    <p className="text-white fw-ligt">
                      Innerhalb weniger Jahre nach dem Brexit-Votum im Juni 2016
                      waren fünf Premierministerinnen und -minister gescheitert:
                      David Cameron, Theresa May, Boris Johnson, Liz Truss und
                      zuletzt Sunak. Seit der Wahl im vergangenen Juli stellen
                      die Tories nur noch 121 der 650 Abgeordneten im Londoner
                      Unterhaus - das schlechteste Ergebnis seit 1832.
                    </p>
                    <p className="text-white fw-ligt">
                      Kemi Badenoch soll die Konservative Partei in
                      Großbritannien nach der historischen Niederlage bei der
                      Parlamentswahl zurück in die Regierung führen. Die
                      Mitglieder wählten die ehemalige Handelsministerin zur
                      Parteichefin.
                    </p>
                    <p className="text-white fw-ligt">
                      Bei der entscheidenden Stichwahl erhielt sie 57 Prozent
                      der Stimmen. Die Parteirechte ist damit die Nachfolgerin
                      von Ex-Premierminister Rishi Sunak. Innerhalb weniger
                      Jahre nach dem Brexit-Votum im Juni 2016 waren fünf
                      Premierministerinnen und -minister gescheitert: David
                      Cameron, Theresa May, Boris Johnson, Liz Truss und zuletzt
                      Sunak. Seit der Wahl im vergangenen Juli stellen die
                      Tories nur noch 121 der 650 Abgeordneten im Londoner
                      Unterhaus - das schlechteste Ergebnis seit 1832.
                    </p>
                  </div>
                  <div className="news_related_media_box pt-5">
                    <div className="row g-4">
                      <div className="col-12">
                        <img src={AffectedPrice} alt="" className="img-fluid" />
                      </div>
                      <div className="col-12">
                        <img src={GlobalImpact} alt="" className="img-fluid" />
                      </div>
                      <div className="col-12">
                        <img src={RelatedNews} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <CustomizeArticlePanel/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsView;
