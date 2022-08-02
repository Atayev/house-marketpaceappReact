import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {collection,getDocs,query,orderBy,limit} from 'firebase/firestore'
import {db} from '../firebase.config'
import { Carousel,CarouselItem } from 'react-bootstrap'
import Spinner from './Spinner'

function Slider() {

    const [loading,setLoading] = useState(true)
    const [listings,setListings] = useState(null)

    const navigate= useNavigate()

    useEffect(()=>{

        const fetchListings=async ()=> {
            const listingsRef= collection(db,'listings')
            const q = query(listingsRef,orderBy('timestamp','desc'),limit(5))
            const querySnap = await getDocs(q)
    
            let listings =[]
    
            querySnap.forEach((doc)=>{
                return listings.push({
                    id:doc.id,
                    data:doc.data()
                })
            })
       
            setListings(listings)
            setLoading(false)
        }
       fetchListings()
    },[])

    if(loading) {
        return <Spinner />
    }
  return listings && (
    <>
        <p className="exploreHeading">Recomendded</p>

        <Carousel>
            {listings.map(({data,id})=>(
                 <CarouselItem key={id} >
                 <div style={{cursor:"pointer"}} onClick={()=>navigate(`/category/${data.type}/${id}`)}>                  
                 <img style={{height:"50vh"}} className='swiperSlideImg' src={data.imgUrls[0]} alt="" /> 
                 <p className="swiperSlideText">{data.name}</p>
                 <p className="swiperSlidePrice">
                    ${data.discountedPrice ?? data.regularPrice}
                   {" "}{data.type === 'rent' && '/ month'}
                 </p>
            </div>
            </CarouselItem>
            ))}
        </Carousel>
    </>
  )
}

export default Slider