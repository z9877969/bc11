import GoBackHeader from '../../_shared/GoBackHeader/GoBackHeader'
import LabelInput from '../../_shared/LabelInput/LabelInput'

const TransactionPage = () => {
  return (
    <>
    <GoBackHeader title={"Доходы"}/>
      <form>
        <LabelInput title={"День"} name={"day"} type={"date"} />
        <LabelInput title={"Время"} name={"time"} type={"time"} />
        <LabelInput title={"Категория"} name={"category"} type={"button"} defaultValue={"Зарплата"} />
        <LabelInput title={"Сумма"} name={"sum"} placeholder={"Введите сумму"}/>
        <LabelInput title={"Валюта"} name={"currency"} type={"button"} defaultValue={"UAH"}/>
        <LabelInput name={"comment"} placeholder={"Комментарий"}/>
        
    </form>
    </>
  )
}

export default TransactionPage;