import React from "react";
import ModalContainer from "/components/Modal/ModalContainer";

export const UsdRequisitesUkr = () => {
    return <ModalContainer
        requisitesText='Реквізити'
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
    />
};

export const GbpRequisitesUkr = () => {
    return <ModalContainer
        requisitesText='Реквізити'
        title='Реквізити GBP рахунку'
        account='Номер рахунку:'
        accountNumber='?'
        iban='IBAN:'
        ibanNumber='?'
        recipient='Отримувач:'
        recipientDetails='МАЛИШЕВСЬКИЙ СВЯТОСЛАВ'
        bank='Банк (Коресп.):'
        bankDetails='?'
        swift='SWIFT код:'
        swiftDetails='?'
        purpose='Повідомлення:'
        purposeDetails='"Підтримка 207 батальйону ТрО м.Києва"'
        gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'
    />
};

export const EurRequisitesUkr = () => {
    return <ModalContainer
        requisitesText='Реквізити'
        trigger='Переказ за реквізитами'
        title='Реквізити EUR рахунку'
        account='Номер рахунку:'
        accountNumber={4731219613244064}
        iban='IBAN:'
        ibanNumber='UA243052990000026205738201214'
        recipient='Отримувач:'
        recipientDetails='МАЛИШЕВСЬКИЙ СВЯТОСЛАВ (3244919677)'
        bank='Банк (Коресп.):'
        bankDetails='J.P.MORGAN AG, Correspondent account: 623-160-5145'
        swift='SWIFT код:'
        swiftDetails='CHASDEFX'
        purpose='Повідомлення:'
        purposeDetails='"Підтримка 207 батальйону ТрО м.Києва"'
        gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'
    />
}

export const UahRequisitesUkr = () => {
    return <ModalContainer
        requisitesText='Реквізити'
        trigger='Переказ за реквізитами'
        title='Гривневий рахунок'
        account='Номер рахунку:'
        accountNumber={5363542308417279}
        iban='IBAN:'
        ibanNumber='UA903052990000026206684803044'
        recepient='Отримувач:'
        recipientDetails='МАЛИШЕВСЬКИЙ СВЯТОСЛАВ (3244919677)'
        bank='Банк:'
        bankDetails='ПриватБанк (305299)'
        purpose='Повідомлення:'
        purposeDetails='"Підтримка 207 батальйону ТрО м.Києва"'
        gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'
    />
}
