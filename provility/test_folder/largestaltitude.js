const gain=[-5,1,5,0,-7]
        let max = 0;
        let lengrhAltitude = 0;
        for(let i = 0;i< gain.length;i++)
        {
            lengrhAltitude += gain[index];
            if(lengrhAltitude > max)
            {
    
    
                max = sum;
            }
        }
        return max;