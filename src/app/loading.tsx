import SkeletonsComponent from "@/components/SkeletonsComponent";
//Ottimo ho appena scoperto che questo componente è completamente inutile dato che una volta 
//sul server, questo non può mai essere chiamato. Non è che magari fa ssg e non lo so?
export default function Loading() {
    return <SkeletonsComponent />
}