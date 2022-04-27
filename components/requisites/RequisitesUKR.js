import React from "react";
import ModalContainer from "/components/ModalContainer";
import Header from "/components/Header";

export const usdRequisitesUkr = () => {
    return <ModalContainer
        title='Реквізити USD рахунку'
        account='Номер рахунку:'
        accountNumber={26207301959227}
        iban='IBAN:'
        ibanNumber='UA093220010000026207301959227'
        recipient='Отримувач:'
        recipientDetails='МАЛИШЕВСЬКИЙ СВЯТОСЛАВ'
        bank='Банк (Коресп.):'
        bankDetails='JSC UNIVERSAL BANK, КИЇВ, УКРАЇНА'
        swift='SWIFT код:'
        swiftDetails='UNJSUAUKXXX'
        purpose='Повідомлення:'
        purposeDetails='"Підтримка 207 батальйону ТрО м.Києва"'
        gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'
    ><Header/></ModalContainer>
}