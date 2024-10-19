import { defu } from 'defu'
import { toast } from 'vue-sonner'

export function useAPI(api: string, options?: object): Promise<unknown> {
  return $fetch(api, defu(options || {}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('SinkSiteToken') || ''}`,
    },
  })).catch((error) => {
    if (error?.status === 401) {
      localStorage.removeItem('SinkSiteToken')
      navigateTo('/dashboard/login')
      toast("Sir, that is the WRONG PASSWORD GET OUT OF MY SITE!!!")
    }else{
      if (error?.data?.statusMessage) {
        toast(error?.data?.statusMessage)
      }
    }
    // if (error?.data?.statusMessage) {
    //   //error?.data?.statusMessage
    //   toast("Sir, that is the WRONG PASSWORD GET OUT OF MY SITE!!!")
    // }
    return Promise.reject(error)
  })
}
