import React from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';

import useFetch from '../../hook/useFetch';


const JobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    return (
        <Text>JobDetails</Text>
    )
}

export default JobDetails;