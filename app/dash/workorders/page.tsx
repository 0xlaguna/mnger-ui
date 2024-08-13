import { WorkOrderStoreProvider } from "@/providers/workorder-store-provider"

import WorkOrderPage from "./work-order-page"

const Page = () => {
  return (
    <WorkOrderStoreProvider>
      <WorkOrderPage />
    </WorkOrderStoreProvider>
  )
}

export default Page
