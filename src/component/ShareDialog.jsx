import React, { useState } from "react";
import {
    FaTwitter,
    FaFacebookF,
    FaWhatsapp,
    FaRedditAlien,
} from "react-icons/fa";

const ShareDialog = (props) => {
    const { open, setOpen } = props;

    return (
        <>


            {open && (
                <div className="share-dialog glass-box p-4">
                    <h6 className="text-white mb-4">Share this article</h6>
                    <div className="d-flex justify-content-around align-items-center flex-wrap gap-3">
                        <div className="share-option">
                            <div className="circle_icon bgtwitter">
                                <FaTwitter className="icon twitter" />
                            </div>
                            <span>Linked in</span>
                        </div>
                        <div className="share-option">
                            <div className="circle_icon bgfacebook">
                                <FaFacebookF className="icon facebook" />
                            </div>
                            <span>Mail</span>
                        </div>
                        <div className="share-option">
                            <div className="circle_icon bgtwhatsapp">
                                <FaWhatsapp className="icon whatsapp" />
                            </div>
                            <span>WhatsApp</span>
                        </div>
                        <div className="share-option">
                            <div className="circle_icon bgreddit">
                                <FaRedditAlien className="icon reddit" />
                            </div>
                            <span>Copy Link</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShareDialog;
