import React from "react";
import ModalContainer from "/components/Modal/ModalContainer";

export const UsdRequisitesEng = () => {
    return <ModalContainer
        requisitesText='Requisites'
        title='USD account requisites'
        account='Account №: '
        accountNumber={26207301959227}
        iban='IBAN: '
        ibanNumber='UA093220010000026207301959227'
        recipient='Recipient: '
        recipientDetails='MALYSHEVSKYI SVIATOSLAV'
        bank='Bank (Coresp.): '
        bankDetails='JSC UNIVERSAL BANK, KYIV, UKRAINE'
        swift='SWIFT code: '
        swiftDetails='UNJSUAUKXXX'
        purpose='Purpose of payment: '
        purposeDetails='"Support for the Battalion 207 of the Ukrainian Territorial Defence"'
        gratitude='THANKS FOR YOUR SUPPORT! Glory to Ukraine!'
    />
};

export const GbpRequisitesEng = () => {
    return <ModalContainer
        requisitesText='Requisites'
        title='GBP account requisites'
        account='Account №: '
        accountNumber='?'
        iban='IBAN: '
        ibanNumber='?'
        recipient='Recipient: '
        recipientDetails='MALYSHEVSKYI SVIATOSLAV'
        bank='Bank (Coresp.): '
        bankDetails='?'
        swift='SWIFT code: '
        swiftDetails='?'
        purpose='Purpose of payment: '
        purposeDetails='"Support for the Battalion 207 of the Ukrainian Territorial Defence"'
        gratitude='THANKS FOR YOUR SUPPORT! Glory to Ukraine!'
    />
};

export const EurRequisitesEng = () => {
    return <ModalContainer
        requisitesText='Requisites'
        trigger='Direct transfer'
        title='EUR account requisites'
        account='Account №: '
        accountNumber={4731219613244064}
        iban='IBAN: '
        ibanNumber='UA243052990000026205738201214'
        recipient='Recipient: '
        recipientDetails='MALYSHEVSKYI SVIATOSLAV (3244919677)'
        bank='Bank (Coresp.): '
        bankDetails='J.P.MORGAN AG, Correspondent account: 623-160-5145'
        swift='SWIFT code: '
        swiftDetails='CHASDEFX'
        purpose='Purpose of payment: '
        purposeDetails='"Support for the Battalion 207 of the Ukrainian Territorial Defence"'
        gratitude='THANKS FOR YOUR SUPPORT! Glory to Ukraine!'
    />
}

export const UahRequisitesEng = () => {
    return <ModalContainer
        requisitesText='Requisites'
        trigger='Direct transfer'
        title='UAH account requisites'
        account='Account №: '
        accountNumber={5363542308417279}
        iban='IBAN: '
        ibanNumber='UA903052990000026206684803044'
        recepient='Recipient: '
        recipientDetails='MALYSHEVSKYI SVIATOSLAV (3244919677)'
        bank='Bank: '
        bankDetails='PrivatPBank (305299)'
        purpose='Purpose of payment: '
        purposeDetails='"Support for the Battalion 207 of the Ukrainian Territorial Defence"'
        gratitude='THANKS FOR YOUR SUPPORT! Glory to Ukraine!'
    />
}
