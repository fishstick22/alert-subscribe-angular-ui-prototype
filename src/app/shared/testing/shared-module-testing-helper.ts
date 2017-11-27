// This bundles everything up nice and neat for feature modules to leverage these doubles

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration,
         ProgramProfile } from 'app/shared/model/testing/model-testing-helper';

import { ClientActionsPopoverStubComponent,
         ClientActionTableStubComponent,
         CommActionsPopoverStubComponent,
         CommActionTableStubComponent,
         DateEffExpStubComponent,
         DatePickerPopupStubComponent,
         ProgramActionsPopoverStubComponent,
         SelectChannelPriorityStubComponent,
         SelectChannelMandatoryStubComponent,
         SortableColumnStubComponent } from 'app/shared/components/testing/stub-testing-components';

import { ClientConfigurationsService,
         ClientsService,
         CommunicationsService,
         DataApiService,
         FakeClientConfigurationsService,
         FakeClientsService,
         FakeCommunicationsService,
         FakeDataApiService,
         FakeProgramConfigurationsService,
         FakeProgramProfilesService,
         FakeProgramsService,
         ProgramConfigurationsService,
         ProgramProfilesService,
         ProgramsService } from 'app/shared/services/testing/fake-data-api.service';

// re-export for tester convenience

export * from 'app/shared/model/testing/model-testing-helper';

export * from 'app/shared/components/testing/stub-testing-components';

export * from 'app/shared/services/testing/fake-data-api.service';
