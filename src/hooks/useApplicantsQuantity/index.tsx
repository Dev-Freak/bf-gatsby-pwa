import useStore from "../useStore"

const useApplicantsQuantity = () => {
  const { boundSetApplicantsQuantity } = useStore()

  const handleSetApplicantsQuantity = value =>
    boundSetApplicantsQuantity(value.split(" ")[0])

  return { handleSetApplicantsQuantity }
}

export default useApplicantsQuantity
