import { View, Text } from "react-native";
import Carousel from './carousel'

export default function App() {

  let invoicesMock = [
    {
      reference: "Jul/2021",
      invoiceId: 19386349,
      fmtAmount: "R$ 337,59",
      amount: 337.59,
      issueDateHour: "08/07/2021",
      billedConsumption: "33 m³",
      maturityDate: "27/07/2021",
      overdue: true,
      status: "Pendente",
      paid: 1,
      isPayment: true,
      id: 19386349,
      value: 337.59,
      statusId: 0,
      month: "Jul/2021",
      dueAt: "27/07",
      dateReference: "2021-08-01T03:00:00.000Z"
    },
    {
      reference: "Jun/2021",
      invoiceId: 19194693,
      fmtAmount: "R$ 404,93",
      amount: 404.93,
      issueDateHour: "09/06/2021",
      billedConsumption: "37 m³",
      maturityDate: "28/06/2021",
      overdue: true,
      status: "Pendente",
      paid: 1,
      isPayment: true,
      id: 19194693,
      value: 404.93,
      statusId: 0,
      month: "Jun/2021",
      dueAt: "28/06",
      dateReference: "2021-07-01T03:00:00.000Z"
    },
    {
      reference: "Mai/2021",
      invoiceId: 18999350,
      fmtAmount: "R$ 320,76",
      amount: 320.76,
      issueDateHour: "10/05/2021",
      billedConsumption: "32 m³",
      maturityDate: "27/05/2021",
      overdue: true,
      status: "Pendente",
      paid: 1,
      isPayment: true,
      id: 18999350,
      value: 320.76,
      statusId: 0,
      month: "Mai/2021",
      dueAt: "27/05",
      dateReference: "2021-06-01T03:00:00.000Z"
    }
  ]

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel items={invoicesMock} />
    </View>
  );
}
