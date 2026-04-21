import React, { useState } from 'react'

const useSmoothLoading = (delay=300) => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true)
    }
    const stopLoading = () => {
        setTimeout(() => setLoading(false), delay);
    }
    return {loading,startLoading,stopLoading}
}

export default useSmoothLoading